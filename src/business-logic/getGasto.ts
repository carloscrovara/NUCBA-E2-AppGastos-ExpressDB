import { Item } from "./types/Item";
import { get } from "../repository/fileMethods";

export async function getGastos(): Promise<Item[]> {
    try {
        const gastos = (await get("gastos")) as Item[];
        return gastos;
    } catch (err) {
        console.log(err);
        throw err;
    }
}
export async function getGastoItem(itemId: string): Promise<Item> {
    try {
        const gastos = (await get("gastos")) as Item[];
        const item = gastos.find((gastoItem) => gastoItem.id === itemId);
        if (item) {
            return item;
        }

        throw new Error(`Item: ${itemId} no encontrado`);
    } catch (err) {
        console.log(err);
        throw err;
    }
}
