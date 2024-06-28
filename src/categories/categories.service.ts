import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/shared/db/prisma/prisma.service';
import { Categories } from '@prisma/client';

@Injectable()
export class CategoriesService {
  constructor(private readonly prismaservice: PrismaService) { }


  async create(createCategoryDto: CreateCategoryDto) {
    const categories = await this.prismaservice.categories.create({
      data: createCategoryDto
    });
    return categories;
  }

  async findAll(): Promise<Categories[]> {
    const categories = await this.prismaservice.categories.findMany({
      orderBy: { id: `asc` }
    });
    return categories;
  }

  async findOne(id: number) {
    const categories = await this.prismaservice.categories.findUnique({
      where: { id: id }
    });
    if (!categories) {
      throw new NotFoundException('ไม่พบรายการนี้ในระบบ');
    }
    return categories;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    await this.findOne(id);
    const categories = await this.prismaservice.categories.update({
      where: { id: id }, 
      data: updateCategoryDto
    });
    return categories;
  }


  async remove(id: number) {
    await this.findOne(id);
    const categories = await this.prismaservice.categories.delete({
      where: { id: id }
    });
    return categories;
  }
}
