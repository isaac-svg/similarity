import { db } from '@/lib/db'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google'
import twitterProvider from 'next-auth/providers/twitter'


function getGoogleCredentials(): { clientId: string; clientSecret: string } {
  const clientId = process.env.GOOGLE_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET
  if (!clientId || clientId.length === 0) {
    throw new Error('Missing GOOGLE_CLIENT_ID')
  }

  if (!clientSecret || clientSecret.length === 0) {
    throw new Error('Missing GOOGLE_CLIENT_SECRET')
  }

  return { clientId, clientSecret }
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET as string,
      version:"2.0"
    }),
    // twitterProvider({
    //   clientId:process.env.TWITTER_ID as string,
    //   clientSecret:process.env.TWITTER_SECRET as string,
    //   version:"2.0"
    // })
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
      }

      return session
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      })

      if (!dbUser) {
        token.id = user!.id
        return token
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      }
    },
    redirect() {
      return '/dashboard'
    },
  },
}


export default NextAuth(authOptions)