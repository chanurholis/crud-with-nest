import { Test, TestingModule } from '@nestjs/testing';
import { SubAppController } from './sub-app.controller';
import { SubAppService } from './sub-app.service';

describe('SubAppController', () => {
  let subAppController: SubAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SubAppController],
      providers: [SubAppService],
    }).compile();

    subAppController = app.get<SubAppController>(SubAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(subAppController.getHello()).toBe('Hello World!');
    });
  });
});
