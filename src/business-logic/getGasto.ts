import { Item } from "./types/Item";
import { prisma } from "../repository/prisma";

export async function getGastos(): Promise<Item[]> {
    try {
        throw new Error("Error");
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export async function getGastoItemId(itemId: string): Promise<Item| null> {
    try {
        const db = prisma();
        const product = await db.gastos.findUnique({
            where: {
                id: itemId,
            },
    });
    return product;
    } catch (err) {
        console.log(err);
        throw err;
    }
}
