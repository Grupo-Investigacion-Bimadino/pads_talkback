import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommandsModule } from './commands/commands.module';
import { ElementsModule } from './elements/elements.module';
import { LanguagesModule } from './languages/languages.module';

@Module({
  imports: [CommandsModule, ElementsModule, LanguagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
