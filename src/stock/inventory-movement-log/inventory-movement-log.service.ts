import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";
import {TypeInventoryMovementLog} from "@prisma/client";
import {CreateInventoryMovementLogDto} from "./dtos/create-inventory-movement-log.dto";

@Injectable()
export class InventoryMovementLogService {
    constructor(private prisma: PrismaService) {}

    async createInvetoryMovementLog(createInventoryMovementLogDto: CreateInventoryMovementLogDto, type: TypeInventoryMovementLog){
        await this.prisma.inventoryMovementLog.create({
            data: {
                amount_stored: createInventoryMovementLogDto.amount,
                stock_location_id: createInventoryMovementLogDto.stock_location_id,
                product_id: createInventoryMovementLogDto.product_id,
                type: type
            }
        })
    }
}
