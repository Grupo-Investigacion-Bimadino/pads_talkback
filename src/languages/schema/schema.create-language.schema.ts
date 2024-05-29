import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class create_language extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  contracition: string;

  @Prop()
  current_language: string;

  @Prop()
  default_language: string;
  
}

export const CreateLanguageSchema = SchemaFactory.createForClass(create_language);