/*
  Warnings:

  - You are about to drop the `stock_product_entry_logs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `stock_product_entry_logs` DROP FOREIGN KEY `stock_product_entry_logs_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `stock_product_entry_logs` DROP FOREIGN KEY `stock_product_entry_logs_stock_location_id_fkey`;

-- DropTable
DROP TABLE `stock_product_entry_logs`;

-- CreateTable
CREATE TABLE `invetory_movement_logs` (
    `id` VARCHAR(191) NOT NULL,
    `amount_stored` DOUBLE NOT NULL,
    `stock_location_id` VARCHAR(191) NOT NULL,
    `product_id` VARCHAR(191) NOT NULL,
    `type` ENUM('Exit', 'Entry') NOT NULL DEFAULT 'Entry',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `invetory_movement_logs` ADD CONSTRAINT `invetory_movement_logs_stock_location_id_fkey` FOREIGN KEY (`stock_location_id`) REFERENCES `stock_locations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `invetory_movement_logs` ADD CONSTRAINT `invetory_movement_logs_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
