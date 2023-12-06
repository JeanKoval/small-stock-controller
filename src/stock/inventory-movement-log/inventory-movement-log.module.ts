import { Module } from '@nestjs/common';
import { InventoryMovementLogService } from './inventory-movement-log.service';

@Module({
  providers: [InventoryMovementLogService],
  exports: [InventoryMovementLogService]
})
export class InventoryMovementLogModule {}
