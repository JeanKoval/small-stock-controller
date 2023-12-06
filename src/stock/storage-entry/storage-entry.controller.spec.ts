import { Test, TestingModule } from '@nestjs/testing';
import { StorageEntryController } from './storage-entry.controller';
import { StockProductEntryService } from './storage-entry.service';

describe('StockProductEntryController', () => {
  let controller: StorageEntryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StorageEntryController],
      providers: [StockProductEntryService],
    }).compile();

    controller = module.get<StorageEntryController>(StorageEntryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
