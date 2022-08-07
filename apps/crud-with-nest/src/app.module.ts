import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { LoggerMiddlewareMiddleware } from './logger-middleware.middleware';
import { RolesModule } from './roles/roles.module';

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
    RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddlewareMiddleware).forRoutes('*');
  }
}
