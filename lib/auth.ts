import { cookies } from "next/headers"
import { prisma } from "./prisma"

export async function auth() {
  const cookieStore = await cookies()
  const token = cookieStore.get("session")?.value
  
  if (!token) return null

  try {
    const userId = Buffer.from(token, "base64").toString("utf-8")
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { vendor: true }
    })

    if (!user) return null

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        vendorId: user.vendor?.id
      }
    }
  } catch {
    return null
  }
}

export async function createSession(userId: string) {
  const token = Buffer.from(userId).toString("base64")
  const cookieStore = await cookies()
  cookieStore.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7 // 7 days
  })
}

export async function destroySession() {
  const cookieStore = await cookies()
  cookieStore.delete("session")
}
