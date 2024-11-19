// // import { handlers } from "Next-auth"
// import NextAuth from "next-auth"
// import Google from "next-auth/providers/google"
// import AppleProvider from "next-auth/providers/apple"
// import GitHubProvider from "next-auth/providers/github"

// export const authOptions = NextAuth({
//     providers: [
//         Google({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//         // AppleProvider({
//         //     clientId: process.env.APPLE_ID,
//         //     clientSecret: process.env.APPLE_SECRET,
//         // }),
//         // GitHubProvider({
//         //     clientId: process.env.GITHUB_ID,
//         //     clientSecret: process.env.GITHUB_SECRET,
//         //   }),
//     ]
// })

// export { authOptions as GET, authOptions as POST }  // This is a shorthand for exporting the handlers and also for server side rendering

import { handlers } from "@/auth"

export const { GET, POST } = handlers