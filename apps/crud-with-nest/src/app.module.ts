import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { LoggerMiddlewareMiddleware } from './logger-middleware.middleware';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubAppModule } from 'apps/sub-app/src/sub-app.module';
import { SubAppController } from 'apps/sub-app/src/sub-app.controller';
import { SubAppService } from 'apps/sub-app/src/sub-app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Password123#@!',
      database: 'crud_with_nest',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    CatsModule,
    SubAppModule,
  ],
  controllers: [AppController, CatsController, SubAppController],
  providers: [AppService, CatsService, SubAppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddlewareMiddleware)
      .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}
