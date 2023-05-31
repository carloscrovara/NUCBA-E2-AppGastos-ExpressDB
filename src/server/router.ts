import { Router, Request, Response, NextFunction } from "express";
import * as controllers from "./controllers";
import { createItemValidator as validator } from "./validators/validators";
import { body } from "express-validator";

export const router = Router();

//Ruta para crear un gasto
router.post(
    "/", 
    body("importe").isNumeric().notEmpty(),
    body("descripcion").isString().notEmpty(),
    body("categoria").isString().optional(),
    validator,
    controllers.createGastoItemController
);

//Rutas para obtener todos los gastos y para obtener un gasto
router.get("/", controllers.getGastosController );
router.get("/:id", controllers.getGastoItemController);

//Ruta para modificar un gasto
router.put(
    "/:id", 
    body("importe").isNumeric().notEmpty(),
    body("descripcion").isString().notEmpty(),
    body("categoria").isString().optional(),
    validator,    
    controllers.updateGastoItemController
);

//Ruta para eliminar un gasto
router.delete("/:id", controllers.deleteGastoItemController);