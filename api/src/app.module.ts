import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { RoomModule } from './room/room.module';
import { SubjectModule } from './subject/subject.module';
import { VideoModule } from './video/video.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_CONNECTION,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [`${__dirname}/**/entities/*.{ts,js}`],
      migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
      synchronize: false,
    } as TypeOrmModuleOptions),
    RoomModule,
    SubjectModule,
    VideoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
