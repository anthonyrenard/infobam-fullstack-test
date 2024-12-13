import { Injectable, NotFoundException } from '@nestjs/common';
import { VehicleRepository } from '../repositories/vehicle.repository';
import { 
  Vehicle, 
  VehicleFilterOptions,
  PaginatedResponse 
} from '../../../common/interfaces/vehicle.interface';
import { FilterVehicleDto } from 'src/common/dtos/filter-vehicle.dto';
import { InvalidFilterException, VehicleNotFoundException } from 'src/common/exceptions/custom.exception';

@Injectable()
export class VehicleService {
  constructor(private readonly vehicleRepository: VehicleRepository) {}

  async findAll(filterDto: FilterVehicleDto) {
    try {
      // Validate filter values
      if (filterDto.yearFrom && filterDto.yearTo && filterDto.yearFrom > filterDto.yearTo) {
        throw new InvalidFilterException('Year range is invalid: yearFrom cannot be greater than yearTo');
      }
      if (filterDto.priceFrom && filterDto.priceTo && filterDto.priceFrom > filterDto.priceTo) {
        throw new InvalidFilterException('Price range is invalid: priceFrom cannot be greater than priceTo');
      }

      return await this.vehicleRepository.findAll(filterDto);
    } catch (error) {
      if (error instanceof InvalidFilterException) {
        throw error;
      }
      console.error('Error fetching vehicles:', error);
      throw new Error('Failed to fetch vehicles');
    }
  }

  async findById(id: string): Promise<Vehicle> {
    const vehicle = await this.vehicleRepository.findById(id);
    if (!vehicle) {
      throw new VehicleNotFoundException(id);
    }
    return vehicle;
  }
}