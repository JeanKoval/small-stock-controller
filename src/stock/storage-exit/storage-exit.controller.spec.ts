import { Test, TestingModule } from '@nestjs/testing';
import { StorageExitController } from './storage-exit.controller';

describe('StockProductEntryController', () => {
  let controller: StorageExitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StorageExitController],
      providers: [StorageExitController],
    }).compile();

    controller = module.get<StorageExitController>(StorageExitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
