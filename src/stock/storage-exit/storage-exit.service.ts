import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";
import {TypeInventoryMovementLog} from "@prisma/client";
import {CreateInventoryMovementLogDto} from "../inventory-movement-log/dtos/create-inventory-movement-log.dto";
import {InventoryMovementLogService} from "../inventory-movement-log/inventory-movement-log.service";

@Injectable()
export class StorageExitService {
    constructor(
        private prisma: PrismaService,
        private inventoryMovementLogService: InventoryMovementLogService
    ) {}

    async storageExit(createInventoryMovementLogDto: CreateInventoryMovementLogDto){
        const storage = await this.prisma.storage.findFirst({
            where: {
                product_id: createInventoryMovementLogDto.product_id,
                stock_location_id: createInventoryMovementLogDto.stock_location_id
            }
        });

        if(storage == null){
            return {
                message: "No stock storage found for this product and stock location!",
                data: createInventoryMovementLogDto
            };
        }else{
            if(storage.amount < createInventoryMovementLogDto.amount){
                return {
                    message: "It is not possible to issue the stock issue because the quantity in stock is smaller!",
                    data: createInventoryMovementLogDto
                };
            }

            await this.inventoryMovementLogService.createInvetoryMovementLog(createInventoryMovementLogDto, TypeInventoryMovementLog.Exit)

            return this.prisma.storage.update({
                where: {
                    id: storage.id
                },
                data: {
                    amount: storage.amount - createInventoryMovementLogDto.amount
                }
            })
        }
    }
}
