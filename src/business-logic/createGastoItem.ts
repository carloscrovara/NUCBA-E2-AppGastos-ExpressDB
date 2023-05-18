import { Item } from "./types/Item";
import { v4 as uuid } from "uuid";
import { get, save } from "../repository/fileMethods";

export async function createGastoItem(item: Item): Promise<Item> {
    try {
        const gastos = (await get("gastos")) as Item[];

        /*
        const itemExists = gastos.filter((gastoItem) => gastoItem.name === item.name);
        if (itemExists.length > 0) {
            throw new Error(`Gasto item ${item.name} ya existe.`);
        }
        */

        item.id = uuid();
        gastos.push(item);
        await save("gastos", gastos);
        return item;
    } catch (err) {
        console.log(err);
        throw err;
    }
}
