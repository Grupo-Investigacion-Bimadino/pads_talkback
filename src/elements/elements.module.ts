import { Module } from '@nestjs/common';
import { ElementsService } from './elements.service';
import { ElementsController } from './elements.controller';
import { create_element, create_elementSchema } from './schema/schema.create-elements.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({

  imports: [
    MongooseModule.forFeature([{ name: create_element.name, schema: create_elementSchema }])
  ],
  controllers: [ElementsController],
  providers: [ElementsService],
  exports:[ElementsService],
})
export class ElementsModule {}
