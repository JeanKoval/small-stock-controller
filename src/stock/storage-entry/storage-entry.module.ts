import { Module } from '@nestjs/common';
import { StorageEntryService } from './storage-entry.service';
import { StorageEntryController } from './storage-entry.controller';

@Module({
  controllers: [StorageEntryController],
  providers: [StorageEntryService],
})
export class StorageEntryModule {}
