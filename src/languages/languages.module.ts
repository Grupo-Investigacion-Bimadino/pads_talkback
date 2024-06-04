import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LanguagesService } from './languages.service';
import { LanguagesController } from './languages.controller';
import { Languages, LanguageSchema } from './schema/schema.create-language.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Languages.name, schema: LanguageSchema }])
  ],
  providers: [LanguagesService],
  controllers: [LanguagesController],
  exports: [LanguagesService],
})
export class LanguagesModule {}