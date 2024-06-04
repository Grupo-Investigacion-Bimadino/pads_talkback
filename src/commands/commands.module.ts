import { Module } from '@nestjs/common';
import { CommandsService } from './commands.service';
import { CommandsController } from './commands.controller';
import { Commands, CommandsSchema } from './schema/schema.create-command.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({

  imports: [
    MongooseModule.forFeature([{ name: Commands.name, schema: CommandsSchema }])
  ],

  controllers: [CommandsController],
  providers: [CommandsService],
  exports: [CommandsService],  

})
export class CommandsModule {}
