CREATE TABLE `categorias` (
    `id` VARCHAR(36) NOT NULL DEFAULT (uuid()),
    `nombre` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gastos` (
    `id` VARCHAR(36) NOT NULL DEFAULT (uuid()),
    `fechaCreacion` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `importe` FLOAT NOT NULL,
    `descripcion` VARCHAR(255) NOT NULL,
    `categoriaId` VARCHAR(36) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

