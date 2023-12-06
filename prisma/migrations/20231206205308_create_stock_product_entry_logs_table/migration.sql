-- CreateTable
CREATE TABLE `stock_product_entry_logs` (
    `id` VARCHAR(191) NOT NULL,
    `amount_stored` DOUBLE NOT NULL,
    `stock_location_id` VARCHAR(191) NULL,
    `product_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `stock_product_entry_logs` ADD CONSTRAINT `stock_product_entry_logs_stock_location_id_fkey` FOREIGN KEY (`stock_location_id`) REFERENCES `stock_locations`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stock_product_entry_logs` ADD CONSTRAINT `stock_product_entry_logs_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
