import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Languages extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  contracition: string;

  @Prop()
  current_language: string;

  @Prop()
  default_language: string;
  
}

export const LanguageSchema = SchemaFactory.createForClass(Languages);