import { Module } from '@nestjs/common';
import { SubAppController } from './sub-app.controller';
import { SubAppService } from './sub-app.service';

@Module({
  imports: [],
  controllers: [SubAppController],
  providers: [SubAppService],
})
export class SubAppModule {}
