import {Injectable, Post} from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import {PrismaService} from "../../prisma/prisma.service";

@Injectable()
export class StockService {

  constructor(private prisma: PrismaService) { }

  create(createStockDto: CreateStockDto) {
    return this.prisma.stock.create({
      data: createStockDto,
    });
  }

  findAll() {
    return this.prisma.stock.findMany({
      orderBy: {
        created_at: 'desc'
      }
    });
  }

  findOne(id: string) {
    return this.prisma.stock.findUniqueOrThrow({
      where:{
        id: id
      }
    });
  }

  update(id: string, updateStockDto: UpdateStockDto) {
    return this.prisma.stock.update({
      where: {
        id: id
      },
      data: updateStockDto
    });
  }

  remove(id: string) {
    return this.prisma.stock.delete({
      where: {
        id: id
      }
    });
  }
}
