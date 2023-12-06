import { Test, TestingModule } from '@nestjs/testing';
import { StockProductEntryService } from './storage-entry.service';

describe('StockProductEntryService', () => {
  let service: StockProductEntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockProductEntryService],
    }).compile();

    service = module.get<StockProductEntryService>(StockProductEntryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
