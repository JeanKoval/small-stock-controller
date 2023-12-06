import { Module } from '@nestjs/common';
import { StorageExitService } from './storage-exit.service';
import { StorageExitController } from './storage-exit.controller';
import {InventoryMovementLogService} from "../inventory-movement-log/inventory-movement-log.service";

@Module({
  controllers: [StorageExitController],
  providers: [StorageExitService, InventoryMovementLogService],
})
export class StorageExitModule {}
