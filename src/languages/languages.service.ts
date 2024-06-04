import { Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { Languages } from './schema/schema.create-language.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LanguagesService {
  constructor(@InjectModel(Languages.name) private LanguagesModel: Model<Languages>) {}

  async create(createLanguageDto: CreateLanguageDto): Promise<Languages> {
    const Languages = new this.LanguagesModel(createLanguageDto);
    return Languages.save();
  }

  async findAll(): Promise<Languages[]> {
    return this.LanguagesModel.find().exec();
  }

  async findOne(id: string): Promise<Languages> {
    return this.LanguagesModel.findById(id).exec();
  }

  async update(id: string, updateLanguageDto: UpdateLanguageDto): Promise<Languages> {
    return this.LanguagesModel.findByIdAndUpdate(id, updateLanguageDto).exec();
  }

  async remove(id: string): Promise<Languages> {
    return this.LanguagesModel.findByIdAndDelete(id).exec();
  }
}

