import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
          include: { vendor: true }
        })

        if (!user || !await bcrypt.compare(credentials.password as string, user.password)) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          vendorId: user.vendor?.id
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.vendorId = user.vendorId
      }
      return token
    },
    session({ session, token }) {
      session.user.role = token.role
      session.user.vendorId = token.vendorId
      return session
    },
  },
  pages: {
    signIn: '/login',
  },
})
