import { Item } from "./types/Item";
import { get, save } from "../repository/fileMethods";

export async function deleteGastoItem(id: string) {
    try {
        const gastos = (await get("gastos")) as Item[];
        const i = gastos.findIndex((gastoItem) => gastoItem.id === id);
        
        if (i === -1) {
            throw new Error(`Item: ${id} no encontrado.`);
        }

        gastos.splice(i, 1);
        
        await save("gastos", gastos);
        return;
    } catch (err) {
        console.log(err);
        throw err;
    }
}