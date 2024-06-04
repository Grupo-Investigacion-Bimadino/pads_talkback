import { Injectable } from '@nestjs/common';
import { CreateCommandDto } from './dto/create-command.dto';
import { UpdateCommandDto } from './dto/update-command.dto';
import { Commands } from './schema/schema.create-command.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class  CommandsService  {
  constructor(@InjectModel(Commands.name) private CommandsModel: Model<Commands>) {}

  async create(CommandsDto: CreateCommandDto): Promise<Commands> {
    const Commands = new this.CommandsModel(CommandsDto);
    return Commands.save();
     }

     async findAll(): Promise<Commands[]> {
      return this.CommandsModel.find().exec();
  }

  async findOne(id: string): Promise<Commands> {
    return this.CommandsModel.findById(id).exec();
  }

  async update(id: string, updateCommandDto: UpdateCommandDto) {
    const updateCommand = await this.CommandsModel.findByIdAndUpdate(id, updateCommandDto) 
    return updateCommand
  }

  async remove(id: string) {
    const deletecomand = await this.CommandsModel.findByIdAndDelete(id)
    return deletecomand
  }
}
