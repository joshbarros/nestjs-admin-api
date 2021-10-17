import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { PermissionService } from './permission.service';

@UseGuards(AuthGuard)
@Controller('permissions')
export class PermissionController {
  constructor(private permissionService: PermissionService) {}

  @Get()
  async all() {
    return this.permissionService.all();
  }

  @Post()
  async create(@Body('name') name: string) {
    return this.permissionService.create({ name });
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    return this.permissionService.findOne({ id });
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body('name') name: string) {
    await this.permissionService.update(id, { name });

    return this.permissionService.findOne({ id });
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.permissionService.delete(id);
  }
}
