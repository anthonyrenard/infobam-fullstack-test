// src/modules/vehicles/repositories/vehicle.repository.ts
import { Injectable } from '@nestjs/common';
import { 
  Vehicle, 
  VehicleFilterOptions, 
  PaginatedResponse,
  VehicleType,
  FuelType 
} from '../../../common/interfaces/vehicle.interface';
import { extendedMockVehicles } from '../data/mock-vehicles';

@Injectable()
export class VehicleRepository {
  // Realistic mock data representing a used car marketplace
  private vehicles: Vehicle[] = extendedMockVehicles;


  findAll(options: VehicleFilterOptions): PaginatedResponse<Vehicle> {
    let filteredVehicles = [...this.vehicles];

    if (options.manufacturer) {
      filteredVehicles = filteredVehicles.filter(v => 
        v.manufacturer.toLowerCase().includes(options.manufacturer!.toLowerCase())
      );
    }

    if (options.type) {
      filteredVehicles = filteredVehicles.filter(v => v.type === options.type);
    }

    filteredVehicles = filteredVehicles.filter(v => 
      (!options.yearFrom || v.year >= options.yearFrom) &&
      (!options.yearTo || v.year <= options.yearTo) &&
      (!options.priceFrom || v.price >= options.priceFrom) &&
      (!options.priceTo || v.price <= options.priceTo)
    );

    if (options.sortBy) {
      filteredVehicles.sort((a, b) => {
        const multiplier = options.sortOrder === 'desc' ? -1 : 1;
        return multiplier * (a[options.sortBy!] - b[options.sortBy!]);
      });
    }

    const page = options.page || 1;
    const limit = options.limit || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedVehicles = filteredVehicles.slice(startIndex, endIndex);

    return {
      data: paginatedVehicles,
      total: filteredVehicles.length,
      page,
      totalPages: Math.ceil(filteredVehicles.length / limit),
      hasNextPage: endIndex < filteredVehicles.length,
      hasPreviousPage: page > 1
    };
  }

  findById(id: string): Vehicle | undefined {
    const vehicle = this.vehicles.find(vehicle => vehicle.id === id);
    
    if (!vehicle) {
      console.warn(`Vehicle with ID ${id} not found`);
    }

    return vehicle;
  }
}