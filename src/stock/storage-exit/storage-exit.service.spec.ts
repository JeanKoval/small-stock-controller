import { Test, TestingModule } from '@nestjs/testing';
import { StorageExitService } from './storage-exit.service';

describe('StockProductEntryService', () => {
  let service: StorageExitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StorageExitService],
    }).compile();

    service = module.get<StorageExitService>(StorageExitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
