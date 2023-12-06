import {Body, Controller, Post} from '@nestjs/common';
import {StorageEntryService} from './storage-entry.service';
import {CreateInventoryMovementLogDto} from "../inventory-movement-log/dtos/create-inventory-movement-log.dto";

@Controller('stock/storage-entry')
export class StorageEntryController {
  constructor(private readonly storageEntryService: StorageEntryService) {}

  @Post()
  storageEntry(@Body() createInventoryMovementLogDto: CreateInventoryMovementLogDto){
    return this.storageEntryService.storageEntry(createInventoryMovementLogDto);
  }
}
