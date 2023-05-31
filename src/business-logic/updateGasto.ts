import { Item } from "./types/Item";
import { get, save } from "../repository/fileMethods";

export async function updateGastoItem(item: Item) {
    try {
        if (!item.id) {
            throw new Error("ID no provisto.");
        }

        const gastos = (await get("gastos")) as Item[];
        const i = gastos.findIndex((gastoItem) => gastoItem.id === item.id);
        
        if (i === -1) {
            throw new Error(`Item: ${item.id} no encontrado.`);
        }

        gastos[i].importe = item.importe;
        gastos[i].descripcion = item.descripcion;
        gastos[i].categoria = item.categoria;

        await save("gastos", gastos);
        return item;
    } catch (err) {
        console.log(err);
        throw err;
    }
}