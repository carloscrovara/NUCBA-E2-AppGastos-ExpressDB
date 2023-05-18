import { Item } from "./types/Item";
import { v4 as uuid } from "uuid";
import { get, save } from "../repository/fileMethods";

export async function createGastoItem(item: Item): Promise<Item> {
    try {
        const gastos = (await get("gastos")) as Item[];

        item.id = uuid();
        item.fecha = new Date().toLocaleString() + "";

        gastos.push(item);
        
        await save("gastos", gastos);
        return item;
    } catch (err) {
        console.log(err);
        throw err;
    }
}
