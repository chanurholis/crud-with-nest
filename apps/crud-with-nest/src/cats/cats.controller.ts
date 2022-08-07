import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getHello(): string {
    return this.catsService.getCats();
  }

  @Post()
  create() {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'gagal cuy',
      },
      HttpStatus.FORBIDDEN,
    );
    // return this.catsService.createCat();
  }
}
