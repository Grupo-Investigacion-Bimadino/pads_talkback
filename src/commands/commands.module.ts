import { Module } from '@nestjs/common';
import { CommandsService } from './commands.service';
import { CommandsController } from './commands.controller';
import { create_command, create_commandSchema } from './schema/schema.create-command.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({

  imports: [
    MongooseModule.forFeature([{ name: create_command.name, schema: create_commandSchema }])
  ],

  controllers: [CommandsController],
  providers: [CommandsService],
  exports: [CommandsService],  

})
export class CommandsModule {}
