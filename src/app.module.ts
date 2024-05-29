import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommandsModule } from './commands/commands.module';
import { ElementsModule } from './elements/elements.module';
import { LanguagesModule } from './languages/languages.module';
import { MongooseModule } from '@nestjs/mongoose'; 

@Module({
  imports: [CommandsModule, ElementsModule, LanguagesModule, MongooseModule.forRoot('mongodb://jorged:1003345316@ac-sjxqnea-shard-00-00.f67wnfv.mongodb.net:27017,ac-sjxqnea-shard-00-01.f67wnfv.mongodb.net:27017,ac-sjxqnea-shard-00-02.f67wnfv.mongodb.net:27017/commands?replicaSet=atlas-afw8ku-shard-0&ssl=true&authSource=admin')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
