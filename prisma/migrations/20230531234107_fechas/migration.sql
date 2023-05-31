/*
  Warnings:

  - You are about to drop the column `fechaCreacion` on the `gastos` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `gastos_categoriaId_fkey` ON `gastos`;

-- AlterTable
ALTER TABLE `gastos` DROP COLUMN `fechaCreacion`,
    ADD COLUMN `fecha_creacion` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `fecha_modificacion` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AddForeignKey
ALTER TABLE `gastos` ADD CONSTRAINT `gastos_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `categorias`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
