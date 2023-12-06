import { Test, TestingModule } from '@nestjs/testing';
import { InventoryMovementLogService } from './inventory-movement-log.service';

describe('InventoryMovementLogService', () => {
  let service: InventoryMovementLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InventoryMovementLogService],
    }).compile();

    service = module.get<InventoryMovementLogService>(InventoryMovementLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
