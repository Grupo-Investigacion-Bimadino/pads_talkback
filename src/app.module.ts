import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { AppService } from './app.service';
import { CommandsModule } from './commands/commands.module';
import { ElementsModule } from './elements/elements.module';
import { LanguagesModule } from './languages/languages.module';

import { MongooseModule } from '@nestjs/mongoose'; 
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') }),
    MongooseModule.forRoot(process.env.DB_URI),
    CommandsModule, 
    ElementsModule, 
    LanguagesModule, 
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
