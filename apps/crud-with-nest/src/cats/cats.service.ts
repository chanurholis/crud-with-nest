import { Injectable, Get, Post } from '@nestjs/common';

@Injectable()
export class CatsService {
  @Get()
  getCats(): string {
    return 'get all cats!';
  }

  @Post()
  createCat() {
    return 'create cat endpoint';
  }
}
