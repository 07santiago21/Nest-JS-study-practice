import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';
import { Repository } from 'typeorm';
import { Breed } from 'src/breeds/entities/breed.entity';

@Injectable()
export class CatsService {

  constructor(
    @InjectRepository(Cat) private readonly catRepository: Repository<Cat>,
    @InjectRepository(Breed) private readonly breadRepository: Repository<Breed>
  ) { }

  async create(createCatDto: CreateCatDto) {

    const breed = await this.breadRepository.findOneBy({ name: createCatDto.breed });

    if (!breed) {
      throw new BadRequestException('bread not found')
    }

    const cat = this.catRepository.create({ ...createCatDto, breed });

    try {
      return await this.catRepository.save(cat)
    }
    catch (e) {
      throw new InternalServerErrorException('An error occurred while saving the cat.')
    }


  }

  async findAll() {
    return await this.catRepository.find();
  }

  async findOne(id: number) {
    return await this.catRepository.findOneBy({ id });
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return //this.catRepository.update(id,updateCatDto);
  }

  remove(id: number) {
    return this.catRepository.softDelete({ id });
  }
}
