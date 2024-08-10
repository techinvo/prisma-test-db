/*
  Warnings:

  - The values [ACTIVE,INACTIVE] on the enum `Pet_status` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `ArrivalData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Morph` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PersonalityScale` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Pet` DROP FOREIGN KEY `Pet_arrivalDataId_fkey`;

-- DropForeignKey
ALTER TABLE `Pet` DROP FOREIGN KEY `Pet_morphId_fkey`;

-- DropForeignKey
ALTER TABLE `Pet` DROP FOREIGN KEY `Pet_personalityScaleId_fkey`;

-- AlterTable
ALTER TABLE `Pet` MODIFY `age` VARCHAR(191) NULL,
    MODIFY `status` ENUM('Healthy', 'RIP', 'Sick', 'Watchout') NOT NULL;

-- DropTable
DROP TABLE `ArrivalData`;

-- DropTable
DROP TABLE `Morph`;

-- DropTable
DROP TABLE `PersonalityScale`;
