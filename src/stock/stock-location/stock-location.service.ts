import { Injectable } from '@nestjs/common';
import { CreateStockLocationDto } from './dto/create-stock-location.dto';
import { UpdateStockLocationDto } from './dto/update-stock-location.dto';
import {PrismaService} from "../../prisma/prisma.service";
import {updateOutput} from "ts-jest/dist/legacy/compiler/compiler-utils";

@Injectable()
export class StockLocationService {

  constructor(private prisma: PrismaService) { }

  create(createStockLocationDto: CreateStockLocationDto) {
    return this.prisma.stockLocation.create({
      data: createStockLocationDto
    });
  }

  findAll() {
    return this.prisma.stockLocation.findMany({
      orderBy: {
        created_at: 'desc'
      }
    });
  }

  findOne(id: string) {
    return this.prisma.stockLocation.findUniqueOrThrow({
      where: {
        id: id
      }
    });
  }

  update(id: string, updateStockLocationDto: UpdateStockLocationDto) {
    return this.prisma.stockLocation.update({
      where: {
        id: id
      },
      data: updateStockLocationDto
    });
  }

  remove(id: string) {
    return this.prisma.stockLocation.delete({
      where: {
        id: id
      }
    });
  }
}
