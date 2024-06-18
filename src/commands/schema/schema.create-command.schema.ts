import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import * as mongoose  from 'mongoose';
import { Document } from 'mongoose';
import { Elements, ElementsSchema } from 'src/elements/schema/schema.create-elements.schema';
import { Languages, LanguageSchema } from 'src/languages/schema/schema.create-language.schema';

export type commandDocument = HydratedDocument<Commands>;

@Schema({timestamps:true})

export class Commands extends Document {

  @Prop({type: String, isRequired: true})
  instrucction: string;  

  @Prop({type: String, isRequired: true})
  funtion: string;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Elements'})
  elements : Elements[];

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Languages'})
  languages: Languages[];

}

export const CommandsSchema = SchemaFactory.createForClass(Commands);