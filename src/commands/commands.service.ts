import { Injectable } from '@nestjs/common';
import { CreateCommandDto } from './dto/create-command.dto';
import { UpdateCommandDto } from './dto/update-command.dto';

@Injectable()
export class CommandsService {
  create(createCommandDto: CreateCommandDto) {
    return createCommandDto ;
  }

  findAll() {
    return [
    {
      "id": 1,
      "instrucction": "describe esta imagen",
      "funtion": "describir imagen",
      "id_element" : 1,
      "id_languages": 1
  },
    {
      "id": 2,
      "instrucction": "lee este texto",
      "funtion": "leer texto",
      "id_element" : 1,
      "id_languages": 1
  },
  {
    "id": 3,
    "instrucction": "Haz un resumen de la pantalla",
    "funtion": "resumir pantalla",
    "id_element" : 2,
    "id_languages": 1
  },  


]
    ;
  }

  findOne(id: number) {
    return [
    {
      "id": 1,
      "instrucction": "describe esta imagen",
      "funtion": "describir imagen",
      "id_element" : 1,
      "id_languages": 1,
    }
  ];
  }

  update(id: number, updateCommandDto: UpdateCommandDto) {
    return updateCommandDto [id];
  }

  remove(id: number) {
    return [
    {
      "id": 1,
      "instrucction": "describe esta imagen",
      "funtion": "describir imagen",
      "id_element" : 1,
      "id_languages": 1,
    }
  ];
  }
}
