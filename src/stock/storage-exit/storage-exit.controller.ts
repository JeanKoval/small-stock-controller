import {Body, Controller, Post} from '@nestjs/common';
import {StorageExitService} from './storage-exit.service';
import {CreateInventoryMovementLogDto} from "../inventory-movement-log/dtos/create-inventory-movement-log.dto";

@Controller('stock/storage-exit')
export class StorageExitController {
  constructor(private readonly storageExitService: StorageExitService) {}

  @Post()
  storageExit(@Body() createInventoryMovementLogDto: CreateInventoryMovementLogDto){
    return this.storageExitService.storageExit(createInventoryMovementLogDto);
  }
}
