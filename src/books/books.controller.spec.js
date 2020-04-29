import { Test } from '@nestjs/testing';
import { BooksController } from './books.controller';

describe('Books Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [BooksController],
    }).compile();

    controller = module.get(BooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
