/*
  Warnings:

  - A unique constraint covering the columns `[nombre]` on the table `categorias` will be added. If there are existing duplicate values, this will fail.

*/

-- AlterTable
ALTER TABLE `categorias` ADD COLUMN `fecha_creacion` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `fecha_eliminacion` TIMESTAMP(0) NULL,
    ADD COLUMN `fecha_modificacion` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `gastos` ADD COLUMN `fecha_eliminacion` TIMESTAMP(0) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `categorias_nombre_key` ON `categorias`(`nombre`);
