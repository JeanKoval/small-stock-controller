import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {PrismaService} from "../../prisma/prisma.service";

@Injectable()
export class ProductService {

  constructor(private prisma: PrismaService) { }

  create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: createProductDto
    });
  }

  findAll() {
    return this.prisma.product.findMany({
      orderBy: {
        created_at: 'desc'
      }
    });
  }

  findOne(id: string) {
    return this.prisma.product.findUniqueOrThrow({
      where: {
        id: id
      }
    });
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: {
        id: id
      },
      data: updateProductDto
    });
  }

  remove(id: string) {
    return this.prisma.product.delete({
      where: {
        id: id
      }
    });
  }

  getAmountStock(id: string){
    return this.prisma.product.findUniqueOrThrow({
      where: {
        id: id
      },
      select: {
        Storage: {
          select: {
            amount: true,
            StockLocation: {
              select: {
                id: true,
                code: true
              }
            }
          },
        },
      }
    });
  }
}
