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
    controllers.createGastoController
);

//Rutas para obtener todos los gastos y para obtener un gasto por ID
router.get("/", controllers.getGastosController );
router.get("/:id", controllers.getGastoItemIdController);

//Ruta para modificar un gasto
router.put(
    "/:id", 
    body("importe").isNumeric().notEmpty(),
    body("descripcion").isString().notEmpty(),
    body("categoria").isString().optional(),
    validator,    
    controllers.updateGastoController
);

//Ruta para eliminar un gasto
router.delete("/:id", controllers.deleteGastoController);