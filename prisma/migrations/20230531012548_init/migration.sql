-- AddForeignKey
ALTER TABLE `gastos` ADD CONSTRAINT `gastos_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `categorias`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
