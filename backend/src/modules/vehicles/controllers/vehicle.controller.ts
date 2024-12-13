import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
  HttpStatus,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { VehicleService } from '../services/vehicle.service';

import { FilterVehicleDto } from '../../../common/dtos/filter-vehicle.dto'

@ApiTags('vehicles')
@Controller('vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all vehicles with optional filtering' })
  @ApiResponse({ 
    status: 200, 
    description: 'Returns paginated list of vehicles' 
  })
  async findAll(@Query(ValidationPipe) filterDto: FilterVehicleDto) {
    return this.vehicleService.findAll(filterDto);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get vehicle by ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Returns a vehicle if found' 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Vehicle not found' 
  })
  async findOne(@Param('id') id: string) {
    return this.vehicleService.findById(id);
  }
}