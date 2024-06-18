import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema({timestamps: true})
export class Languages extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({type: String, isRequired: true})
  contracition: string;

  @Prop({type: String, isRequired: true})
  current_language: string;

  @Prop({type: String, isRequired: true})
  default_language: string;
  
}

export const LanguageSchema = SchemaFactory.createForClass(Languages);