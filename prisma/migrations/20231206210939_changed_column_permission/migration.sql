/*
  Warnings:

  - Made the column `stock_location_id` on table `stock_product_entry_logs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `product_id` on table `stock_product_entry_logs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `stock_location_id` on table `storages` required. This step will fail if there are existing NULL values in that column.
  - Made the column `product_id` on table `storages` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `stock_product_entry_logs` DROP FOREIGN KEY `stock_product_entry_logs_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `stock_product_entry_logs` DROP FOREIGN KEY `stock_product_entry_logs_stock_location_id_fkey`;

-- DropForeignKey
ALTER TABLE `storages` DROP FOREIGN KEY `storages_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `storages` DROP FOREIGN KEY `storages_stock_location_id_fkey`;

-- AlterTable
ALTER TABLE `stock_product_entry_logs` MODIFY `stock_location_id` VARCHAR(191) NOT NULL,
    MODIFY `product_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `storages` MODIFY `stock_location_id` VARCHAR(191) NOT NULL,
    MODIFY `product_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `storages` ADD CONSTRAINT `storages_stock_location_id_fkey` FOREIGN KEY (`stock_location_id`) REFERENCES `stock_locations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `storages` ADD CONSTRAINT `storages_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stock_product_entry_logs` ADD CONSTRAINT `stock_product_entry_logs_stock_location_id_fkey` FOREIGN KEY (`stock_location_id`) REFERENCES `stock_locations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stock_product_entry_logs` ADD CONSTRAINT `stock_product_entry_logs_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
