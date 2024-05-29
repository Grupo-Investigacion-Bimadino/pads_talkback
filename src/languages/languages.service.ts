import { Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { create_language } from './schema/schema.create-language.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LanguagesService {
  constructor(@InjectModel(create_language.name) private create_languageModel: Model<create_language>) {}

  async create(createLanguageDto: CreateLanguageDto): Promise<create_language> {
    const create_language = new this.create_languageModel(createLanguageDto);
    return create_language.save();
  }

  async findAll(): Promise<create_language[]> {
    return this.create_languageModel.find().exec();
  }

  async findOne(id: string): Promise<create_language> {
    return this.create_languageModel.findById(id).exec();
  }

  async update(id: string, updateLanguageDto: UpdateLanguageDto): Promise<create_language> {
    return this.create_languageModel.findByIdAndUpdate(id, updateLanguageDto).exec();
  }

  async remove(id: string): Promise<create_language> {
    return this.create_languageModel.findByIdAndDelete(id).exec();
  }
}

