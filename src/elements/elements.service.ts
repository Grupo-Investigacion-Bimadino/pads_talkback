import { Injectable } from '@nestjs/common';
import { CreateElementDto } from './dto/create-element.dto';
import { UpdateElementDto } from './dto/update-element.dto';

@Injectable()
export class ElementsService {
  create(createElementDto: CreateElementDto) {
    return createElementDto;
  }

  findAll() {
    return `This action returns all elements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} element`;
  }

  update(id: number, updateElementDto: UpdateElementDto) {
    return updateElementDto [id];
  }

  remove(id: number) {
    return `This action removes a #${id} element`;
  }
}
