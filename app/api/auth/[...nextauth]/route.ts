import { db } from "@/lib/db";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import {PrismaAdapter} from "@next-auth/prisma-adapter"
import googleProvider from "next-auth/providers/google"


export const authOptions: NextAuthOptions ={
    adapter: PrismaAdapter(db),
    providers:[
        googleProvider({
            clientId:"",
            clientSecret:""
        })
    ],
    // async jwt({token, user}){

    //     return token
    // },

    // async session({session, token, user}){

    //     return session
    // }
}



const handler = NextAuth(authOptions)


export {handler as Get , handler as POST}