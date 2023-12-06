import { Test, TestingModule } from '@nestjs/testing';
import { StorageEntryService } from './storage-entry.service';

describe('StockProductEntryService', () => {
  let service: StorageEntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StorageEntryService],
    }).compile();

    service = module.get<StorageEntryService>(StorageEntryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
