import { Router, Request, Response, NextFunction } from "express";
import * as controllers from "./controllers";

export const router = Router();

//Ruta para crear un gasto
router.post("/", controllers.createGastoItemController);

//Rutas para obtener todos los gastos y para obtener un gasto
router.get("/", controllers.getGastosController );
router.get("/:id", controllers.getGastoItemController);

//Ruta para modificar un gasto
router.put("/:id", controllers.updateGastoItemController);

//Ruta para eliminar un gasto
router.delete("/:id", controllers.deleteGastoItemController);