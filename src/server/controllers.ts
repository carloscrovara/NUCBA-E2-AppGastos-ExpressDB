import { Request, Response, NextFunction } from "express";
import { createGasto } from "../business-logic/createGasto";
import { getGastos, getGastoItemId } from "../business-logic/getGasto";
import { updateGasto } from "../business-logic/updateGasto";
import { deleteGasto } from "../business-logic/deleteGasto";

export const getGastosController = async (req: Request, res: Response) => {
    try {
        const result = await getGastos();
        res.json(result);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getGastoItemIdController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await getGastoItemId(id);
        if (result) {
            res.json(result);
            return;
        }
        res.status(404).json({ message: `Item: ${id} no encontrado` });
        return;
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const createGastoController = async (req: Request, res: Response) => {
    try {
        const newItemInput = req.body;
        const result = await createGasto(newItemInput);
        res.json(result);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateGastoController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const productInput = req.body;
        const result = await updateGasto(id, productInput);
        res.json(result);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteGastoController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await deleteGasto(id);
        res.status(204).send();
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};