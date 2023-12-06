import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { StockModule } from './stock/stock/stock.module';
import { StockLocationModule } from './stock/stock-location/stock-location.module';
import { ProductModule } from './stock/product/product.module';
import { StorageEntryModule } from './stock/storage-entry/storage-entry.module';

@Module({
  imports: [PrismaModule, StockModule, StockLocationModule, ProductModule, StorageEntryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
