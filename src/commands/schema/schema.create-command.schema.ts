import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type create_commandDocument = HydratedDocument<create_command>;

@Schema()
export class create_command {
  @Prop()
  instrucction: string;  

  @Prop()
  funtion: string;

  @Prop()
  id_element : string[];

  @Prop()
  id_languages: string[];

}

export const create_commandSchema = SchemaFactory.createForClass(create_command);