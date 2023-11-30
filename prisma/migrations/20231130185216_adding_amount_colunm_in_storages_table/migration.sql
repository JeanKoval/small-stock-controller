/*
  Warnings:

  - Added the required column `amount` to the `storages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `storages` ADD COLUMN `amount` DOUBLE NOT NULL;
