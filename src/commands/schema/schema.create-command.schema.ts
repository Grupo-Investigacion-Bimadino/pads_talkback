import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type commandDocument = HydratedDocument<Commands>;

@Schema()
export class Commands {
  @Prop()
  instrucction: string;  

  @Prop()
  funtion: string;

  @Prop()
  id_element : string[];

  @Prop()
  id_languages: string[];

}

export const CommandsSchema = SchemaFactory.createForClass(Commands);