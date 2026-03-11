import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const cart = await prisma.cartItem.findMany({
    where: { userId: session.user.id },
    include: { product: { include: { vendor: true } } },
  })

  return NextResponse.json(cart)
}

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { productId, quantity } = await req.json()

  const cartItem = await prisma.cartItem.upsert({
    where: {
      userId_productId: { userId: session.user.id, productId },
    },
    update: { quantity },
    create: { userId: session.user.id, productId, quantity },
  })

  return NextResponse.json(cartItem)
}

export async function DELETE(req: Request) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const productId = searchParams.get("productId")

  await prisma.cartItem.delete({
    where: {
      userId_productId: { userId: session.user.id, productId: productId! },
    },
  })

  return NextResponse.json({ success: true })
}
