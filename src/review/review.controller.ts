import { Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('review')
export class ReviewController {
  @Post('create')
  async create() {}

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Get('byProduct/:productId')
  async get(@Param('productId') productId: string) {}
}
