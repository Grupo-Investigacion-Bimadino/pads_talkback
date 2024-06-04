import { Injectable } from '@nestjs/common';
import { CreateElementDto } from './dto/create-element.dto';
import { UpdateElementDto } from './dto/update-element.dto';
import { Elements } from './schema/schema.create-elements.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ElementsService {
  constructor(@InjectModel(Elements.name) private ElementsModel: Model<Elements>) {}
  
  async create(createElementDto: CreateElementDto): Promise<Elements> {
    const Elements = new this.ElementsModel(createElementDto);
    return Elements.save();
  }

  async findAll(): Promise<Elements[]> {
    return this.ElementsModel.find().exec();
  }

  async findOne(id: string): Promise<Elements> {
    return this.ElementsModel.findById(id).exec();
  }

  async update(id: string, updateElementDto: UpdateElementDto): Promise<Elements> {
    return this.ElementsModel.findByIdAndUpdate(id, updateElementDto).exec();
  }

  async remove(id: string): Promise<Elements> {
    return this.ElementsModel.findByIdAndDelete(id).exec();
  }
}
