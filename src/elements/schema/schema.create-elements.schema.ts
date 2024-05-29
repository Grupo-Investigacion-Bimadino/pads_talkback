import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type create_elementDocument = HydratedDocument<create_element>;

@Schema()
export class create_element {
  @Prop()
  name: string;  

  @Prop()
  descriptor: string;

}

export const create_elementSchema = SchemaFactory.createForClass(create_element);