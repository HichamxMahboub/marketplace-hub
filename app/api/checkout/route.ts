import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2024-12-18.acacia" })

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { cartItems, shippingAddress } = await req.json()

  const vendorOrders = cartItems.reduce((acc: any, item: any) => {
    const vendorId = item.product.vendorId
    if (!acc[vendorId]) acc[vendorId] = []
    acc[vendorId].push(item)
    return acc
  }, {})

  const orders = await Promise.all(
    Object.entries(vendorOrders).map(async ([vendorId, items]: any) => {
      const total = items.reduce((sum: number, item: any) => 
        sum + item.product.price * item.quantity, 0
      )

      const order = await prisma.order.create({
        data: {
          userId: session.user.id,
          vendorId,
          total,
          shippingAddress,
          orderItems: {
            create: items.map((item: any) => ({
              productId: item.productId,
              quantity: item.quantity,
              price: item.product.price,
            })),
          },
        },
      })

      return order
    })
  )

  const totalAmount = orders.reduce((sum, order) => sum + order.total, 0)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(totalAmount * 100),
    currency: "usd",
    metadata: { orderIds: orders.map(o => o.id).join(",") },
  })

  await prisma.cartItem.deleteMany({ where: { userId: session.user.id } })

  return NextResponse.json({ clientSecret: paymentIntent.client_secret })
}
