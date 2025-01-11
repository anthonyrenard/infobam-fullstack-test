import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { Vehicle } from '../entities/vehicle.entity';
import { generateFakeData } from './generateFakeData';

@Injectable()
export class VehicleService {
  private vehicles: Vehicle[] = [];

  constructor() {
    this.generateFakeData();
  }

  private generateFakeData() {
    try {
      const fakeVehicles: Vehicle[] = generateFakeData();
      this.vehicles = fakeVehicles;
    } catch (error) {
      throw new InternalServerErrorException('Failed to generate fake vehicle data');
    }
  }

  async getVehicles(
    page: number = 1,
    limit: number = 10,
    filters: { manufacturer?: string; type?: string; year?: number } = {},
    sort?: { field: 'price' | 'year'; order: 'ASC' | 'DESC' },
  ): Promise<{ data: Vehicle[]; total: number }> {
    try {
      if (page <= 0 || limit <= 0) {
        throw new BadRequestException('Page and limit must be greater than 0');
      }

      let filteredVehicles = this.vehicles;

      // Apply filters
      if (filters.manufacturer) {
        filteredVehicles = filteredVehicles.filter(vehicle => vehicle.manufacturer === filters.manufacturer);
      }
      if (filters.type) {
        filteredVehicles = filteredVehicles.filter(vehicle => vehicle.type === filters.type);
      }
      if (filters.year) {
        filteredVehicles = filteredVehicles.filter(vehicle => vehicle.year === Number(filters.year));
      }

      // Apply sorting
      if (sort) {
        filteredVehicles = filteredVehicles.sort((a, b) => {
          if (sort.field === 'price') {
            return sort.order === 'ASC' ? a.price - b.price : b.price - a.price;
          } else if (sort.field === 'year') {
            return sort.order === 'ASC' ? a.year - b.year : b.year - a.year;
          }
          return 0;
        });
      }

      // Handle empty data scenario
      const total = filteredVehicles.length;
      if (total === 0) {
        throw new NotFoundException('No vehicles found matching the filters');
      }

      // Paginate results
      filteredVehicles = filteredVehicles.slice((page - 1) * limit, page * limit);

      return { data: filteredVehicles, total };
    } catch (error) {
      if (error instanceof BadRequestException || error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error occurred while fetching vehicles');
    }
  }

  async getVehicleById(id: string): Promise<Vehicle> {
    try {
      const vehicle = this.vehicles.find(vehicle => vehicle.id === id);
      if (!vehicle) {
        throw new NotFoundException(`Vehicle with ID ${id} not found`);
      }
      return vehicle;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error occurred while retrieving the vehicle');
    }
  }
}
