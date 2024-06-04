import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ElementsDocument = HydratedDocument<Elements>;

@Schema()
export class Elements {
  @Prop()
  name: string;  

  @Prop()
  descriptor: string;

}

export const ElementsSchema = SchemaFactory.createForClass(Elements);