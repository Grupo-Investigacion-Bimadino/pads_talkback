import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LanguagesService } from './languages.service';
import { LanguagesController } from './languages.controller';
import { create_language, CreateLanguageSchema } from './schema/schema.create-language.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: create_language.name, schema: CreateLanguageSchema }])
  ],
  providers: [LanguagesService],
  controllers: [LanguagesController],
  exports: [LanguagesService],
})
export class LanguagesModule {}