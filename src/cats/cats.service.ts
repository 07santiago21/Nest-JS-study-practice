import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {

  constructor(
    @InjectRepository(Cat) private readonly catRepository: Repository<Cat>,
  ){}

  async create(createCatDto: CreateCatDto) {
    
    const cat = this.catRepository.create(createCatDto)

    return await this.catRepository.save(cat);
  
  }

  async findAll() {
    return await this.catRepository.find();
  }

  async findOne(id: number) {
    return await this.catRepository.findOneBy({id});
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return this.catRepository.update(id,updateCatDto);
  }

  remove(id: number) {
    return this.catRepository.softDelete({id});
  }
}
