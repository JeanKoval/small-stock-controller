import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";
import {CreateInventoryMovementLogDto} from "../inventory-movement-log/dtos/create-inventory-movement-log.dto";
import {InventoryMovementLogService} from "../inventory-movement-log/inventory-movement-log.service";
import {TypeInventoryMovementLog} from "@prisma/client";

@Injectable()
export class StorageEntryService {
    constructor(
        private prisma: PrismaService,
        private inventoryMovementLogService: InventoryMovementLogService
    ) {}

    async storageEntry(createInventoryMovementLogDto: CreateInventoryMovementLogDto){
        const storage = await this.prisma.storage.findFirst({
            where: {
                product_id: createInventoryMovementLogDto.product_id,
                stock_location_id: createInventoryMovementLogDto.stock_location_id
            }
        });

        await this.inventoryMovementLogService.createInvetoryMovementLog(createInventoryMovementLogDto, TypeInventoryMovementLog.Entry);

        if(storage == null){
            return this.prisma.storage.create({
                data: createInventoryMovementLogDto
            });
        }else{
            return this.prisma.storage.update({
                where: {
                    id: storage.id
                },
                data: {
                    amount: storage.amount + createInventoryMovementLogDto.amount
                }
            })
        }
    }
}
