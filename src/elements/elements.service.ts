import { Injectable } from '@nestjs/common';
import { CreateElementDto } from './dto/create-element.dto';
import { UpdateElementDto } from './dto/update-element.dto';
import { create_element } from './schema/schema.create-elements.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ElementsService {
  constructor(@InjectModel(create_element.name) private create_elementModel: Model<create_element>) {}
  
  async create(createElementDto: CreateElementDto): Promise<create_element> {
    const create_element = new this.create_elementModel(createElementDto);
    return create_element.save();
  }

  async findAll(): Promise<create_element[]> {
    return this.create_elementModel.find().exec();
  }

  async findOne(id: string): Promise<create_element> {
    return this.create_elementModel.findById(id).exec();
  }

  async update(id: string, updateElementDto: UpdateElementDto): Promise<create_element> {
    return this.create_elementModel.findByIdAndUpdate(id, updateElementDto).exec();
  }

  async remove(id: string): Promise<create_element> {
    return this.create_elementModel.findByIdAndDelete(id).exec();
  }
}
