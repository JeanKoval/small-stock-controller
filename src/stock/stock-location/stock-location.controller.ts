import {Controller, Get, Post, Body, Patch, Param, Delete, HttpCode} from '@nestjs/common';
import { StockLocationService } from './stock-location.service';
import { CreateStockLocationDto } from './dto/create-stock-location.dto';
import { UpdateStockLocationDto } from './dto/update-stock-location.dto';

@Controller('stock/stock-location')
export class StockLocationController {
  constructor(private readonly stockLocationService: StockLocationService) {}

  @Post()
  create(@Body() createStockLocationDto: CreateStockLocationDto) {
    return this.stockLocationService.create(createStockLocationDto);
  }

  @Get()
  findAll() {
    return this.stockLocationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockLocationService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockLocationDto: UpdateStockLocationDto) {
    return this.stockLocationService.update(id, updateStockLocationDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockLocationService.remove(id);
  }

  @Get('stored-products/:id')
  storedProducts(@Param('id') id: string){
    return this.stockLocationService.storedProducts(id);
  }
}
