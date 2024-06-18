import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose  from 'mongoose';
import { Document } from 'mongoose';



@Schema({timestamps: true})
export class Elements extends Document {
  @Prop({type: String, isRequired: true})
  name: string;  

  @Prop({type: String, isRequired: true})
  descriptor: string;

}

export const ElementsSchema = SchemaFactory.createForClass(Elements);