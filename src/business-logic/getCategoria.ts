import { Categoria } from "./types/Categoria";
import { prisma } from "../repository/prisma";

export async function getCategoria(): Promise<Categoria[]> {
    try {
        const categorias = await prisma()?.categorias.findMany();
        return categorias;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export async function getCategoriaId(categoriaId: string): Promise<Categoria| null> {
    try {
        const db = prisma();
        const categoria = await db.categorias.findUnique({
            where: {
                id: categoriaId,
            },
        });
    return categoria;
    } catch (err) {
        console.log(err);
        throw err;
    }
}