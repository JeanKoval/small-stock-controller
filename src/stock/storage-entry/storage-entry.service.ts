import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";
import {CreateStorageEntryDto} from "./dto/create-storage-entry.dto";

@Injectable()
export class StorageEntryService {
    constructor(private prisma: PrismaService) {}

    async create(createStorageEntryDto: CreateStorageEntryDto){
        const storage = await this.prisma.storage.findFirst({
            where: {
                product_id: createStorageEntryDto.product_id,
                stock_location_id: createStorageEntryDto.stock_location_id
            }
        });

        await this.createStockProductEntryLog(createStorageEntryDto);

        if(storage == null){
            return this.prisma.storage.create({
                data: createStorageEntryDto
            });
        }else{
            return this.prisma.storage.update({
                where: {
                    id: storage.id
                },
                data: {
                    amount: storage.amount + createStorageEntryDto.amount
                }
            })
        }
    }

    async createStockProductEntryLog(createStorageEntryDto: CreateStorageEntryDto){
        await this.prisma.stockProductEntryLog.create({
            data: {
                amount_stored: createStorageEntryDto.amount,
                stock_location_id: createStorageEntryDto.stock_location_id,
                product_id: createStorageEntryDto.product_id
            }
        })
    }
}
