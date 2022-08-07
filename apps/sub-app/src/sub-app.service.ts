import { Injectable } from '@nestjs/common';

@Injectable()
export class SubAppService {
  getHello(): string {
    return 'ini contoh sub app';
  }
}
