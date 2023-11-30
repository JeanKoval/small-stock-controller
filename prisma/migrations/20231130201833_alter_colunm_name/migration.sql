/*
  Warnings:

  - You are about to drop the column `descprition` on the `stocks` table. All the data in the column will be lost.
  - Added the required column `description` to the `stocks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `stocks` DROP COLUMN `descprition`,
    ADD COLUMN `description` VARCHAR(191) NOT NULL;