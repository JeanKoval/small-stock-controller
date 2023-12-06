import {Body, Controller, Post} from '@nestjs/common';
import {StorageEntryService} from './storage-entry.service';
import {CreateStorageEntryDto} from "./dto/create-storage-entry.dto";

@Controller('stock/storage-entry')
export class StorageEntryController {
  constructor(private readonly storageEntryService: StorageEntryService) {}

  @Post()
  storageEntry(@Body() createStorageEntryDto: CreateStorageEntryDto){
    return this.storageEntryService.create(createStorageEntryDto);
  }
}
