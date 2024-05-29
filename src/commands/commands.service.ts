import { Injectable } from '@nestjs/common';
import { CreateCommandDto } from './dto/create-command.dto';
import { UpdateCommandDto } from './dto/update-command.dto';
import { create_command } from './schema/schema.create-command.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class  CommandsService  {
  constructor(@InjectModel(create_command.name) private create_commandModel: Model<create_command>) {}

  async create(create_commandDto: CreateCommandDto): Promise<create_command> {
    const create_command = new this.create_commandModel(create_commandDto);
    return create_command.save();
     }

     async findAll(): Promise<create_command[]> {
      return this.create_commandModel.find().exec();
  }

  async findOne(id: string): Promise<create_command> {
    return this.create_commandModel.findById(id).exec();
  }

  async update(id: string, updateCommandDto: UpdateCommandDto) {
    const updateCommand = await this.create_commandModel.findByIdAndUpdate(id, updateCommandDto) 
    return updateCommand
  }

  async remove(id: string) {
    const deletecomand = await this.create_commandModel.findByIdAndDelete(id)
    return deletecomand
  }
}
