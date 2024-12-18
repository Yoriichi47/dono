import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import {prisma} from "@/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google, GitHub],
  callbacks: {
    async signIn({ account, profile, user }) {
      // Allow account linking if emails match
      if (account.provider && profile?.email) {
        const existingUser = await prisma.user.findUnique({
          where: { email: profile.email },
        });

        if (existingUser && existingUser.id === user.id) {
          return true; // Allow linking
        } else if (existingUser) {
          throw new Error("Email is already linked to another account.");
        }
      }
      return true;
    },
  },
});
