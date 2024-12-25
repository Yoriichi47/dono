import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import {prisma} from "@/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google, GitHub],
  secret: process.env.AUTH_SECRET,
  // debug: true,
  callbacks: {
    async signIn({user, account, profile}){
      let newUsername = user.email.split('@')[0];
      await prisma.user.update({
        where: {email: user.email},
        data: {username: newUsername}
      })
      return true
    }
  }
});
