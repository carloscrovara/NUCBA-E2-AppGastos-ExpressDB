import { Prisma, PrismaClient } from "@prisma/client";

let prismaClient: PrismaClient<
  Prisma.PrismaClientOptions,
  never,
  Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
> | null;

export function createPrismaClient() {
    prismaClient = new PrismaClient();
    return prismaClient;
}

export function prisma() {
    if (!prismaClient) {
        prismaClient = createPrismaClient();
    }
    return prismaClient;
}