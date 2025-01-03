import { PrismaClient } from "@prisma/client";
import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";

// const prismaClientSingleton = () => {
//     const neon = new Pool({ connectionString: process.env.POSTGRES_PRISMA_URL })
//     const adapter = new PrismaNeon(neon)
//     return new PrismaClient({ adapter })
// }

// export const prisma = globalThis.prisma || prismaClientSingleton()

// if (process.env.NODE_ENV !== "production") {
//     globalThis.prisma = prisma;
// }

export const prisma = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

