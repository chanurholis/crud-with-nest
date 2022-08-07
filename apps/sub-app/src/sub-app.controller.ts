import { Controller, Get } from '@nestjs/common';
import { SubAppService } from './sub-app.service';

@Controller('sub-app')
export class SubAppController {
  constructor(private readonly subAppService: SubAppService) {}

  @Get('cobain')
  getHello(): string {
    return this.subAppService.getHello();
  }
}
