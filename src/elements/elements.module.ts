import { Module } from '@nestjs/common';
import { ElementsService } from './elements.service';
import { ElementsController } from './elements.controller';
import { Elements, ElementsSchema } from './schema/schema.create-elements.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({

  imports: [
    MongooseModule.forFeature([{ name: Elements.name, schema: ElementsSchema }])
  ],
  controllers: [ElementsController],
  providers: [ElementsService],
  exports:[ElementsService],
})
export class ElementsModule {}
