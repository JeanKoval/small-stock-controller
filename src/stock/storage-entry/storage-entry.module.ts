import { Module } from '@nestjs/common';
import { StorageEntryService } from './storage-entry.service';
import { StorageEntryController } from './storage-entry.controller';
import {InventoryMovementLogService} from "../inventory-movement-log/inventory-movement-log.service";

@Module({
  controllers: [StorageEntryController],
  providers: [StorageEntryService, InventoryMovementLogService],
})
export class StorageEntryModule {}
