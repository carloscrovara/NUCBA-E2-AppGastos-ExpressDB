import { Request, Response, NextFunction } from "express";
import { createGastoItem } from "../business-logic/createGastoItem";
import { getGastos, getGastoItem } from "../business-logic/getGasto";

export const getGastosController = async (req: Request, res: Response) => {
    try {
        const result = await getGastos();
        res.json(result);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getGastoItemController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await getGastoItem(id);
        res.json(result);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const createGastoItemController = async (
    req: Request,
    res: Response
    ) => {
        try {
        const newItemInput = req.body;
        const result = await createGastoItem(newItemInput);
        res.json(result);
        } catch (error: any) {
        res.status(500).json({ message: error.message });
        }
};