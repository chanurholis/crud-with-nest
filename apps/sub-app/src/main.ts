import { NestFactory } from '@nestjs/core';
import { SubAppModule } from './sub-app.module';

async function bootstrap() {
  const app = await NestFactory.create(SubAppModule);
  await app.listen(3000);
}
bootstrap();
