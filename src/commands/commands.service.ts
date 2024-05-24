import { Injectable } from '@nestjs/common';
import { CreateCommandDto } from './dto/create-command.dto';
import { UpdateCommandDto } from './dto/update-command.dto';

@Injectable()
export class CommandsService {
  create(createCommandDto: CreateCommandDto) {
    return createCommandDto ;
  }

  findAll() {
    return `This action returns all commands`;
  }

  findOne(id: number) {
    return `This action returns a #${id} command`;
  }

  update(id: number, updateCommandDto: UpdateCommandDto) {
    return updateCommandDto [id];
  }

  remove(id: number) {
    return `This action removes a #${id} command`;
  }
}
