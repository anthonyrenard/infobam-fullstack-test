import { Injectable } from '@nestjs/common';
import { Vehicle, VehicleType } from '@vehicle/vehicle.interface';
import { SortBy } from '@vehicle/vehicle.interface';
import { GetVehiclesDto } from '@vehicle/get-vehicles.dto';
import { vehicles } from '@vehicle/vehicle.mock-data';

@Injectable()
export class VehicleService {
  filterVehicles(
    vehicles: Vehicle[],
    filters: {
      priceMin?: number;
      priceMax?: number;
      manufacturer?: string;
      type?: VehicleType;
      year?: number;
    },
  ): Vehicle[] {
    const filterLogic = {
      manufacturer: (vehicle: Vehicle) =>
        !filters.manufacturer ||
        vehicle.manufacturer
          .toLowerCase()
          .includes(filters.manufacturer.toLowerCase()),
      type: (vehicle: Vehicle) =>
        !filters.type || vehicle.type === filters.type,
      year: (vehicle: Vehicle) =>
        !filters.year || vehicle.year === filters.year,
      price: (vehicle: Vehicle) =>
        (!filters.priceMin || vehicle.price >= filters.priceMin) &&
        (!filters.priceMax || vehicle.price <= filters.priceMax),
    };

    return vehicles.filter((vehicle) =>
      Object.values(filterLogic).every((filter) => filter(vehicle)),
    );
  }

  sortVehicles(vehicles: Vehicle[], sortBy?: SortBy): Vehicle[] {
    const sortLogic: Partial<
      Record<SortBy, (a: Vehicle, b: Vehicle) => number>
    > = {
      [SortBy.PRICE]: (a, b) => a.price - b.price,
      [SortBy.YEAR]: (a, b) => b.year - a.year,
      [SortBy.MILEAGE]: (a, b) => (a.mileage || 0) - (b.mileage || 0),
      [SortBy.MANUFACTURER]: (a, b) =>
        a.manufacturer.localeCompare(b.manufacturer),
    };

    return sortBy && sortLogic[sortBy]
      ? [...vehicles].sort(sortLogic[sortBy])
      : vehicles;
  }

  paginateVehicles(
    vehicles: Vehicle[],
    page: number = 1,
    limit: number = 10,
  ): {
    data: Vehicle[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  } {
    const total = vehicles.length;
    const safeLimit = Math.max(1, limit);
    const safePage = Math.max(1, page);
    const totalPages = Math.ceil(total / safeLimit);

    const startIndex = (safePage - 1) * safeLimit;
    const paginatedVehicles = vehicles.slice(
      startIndex,
      startIndex + safeLimit,
    );

    return {
      data: paginatedVehicles,
      total,
      page: safePage,
      limit: safeLimit,
      totalPages,
      hasNextPage: safePage < totalPages,
      hasPreviousPage: safePage > 1,
    };
  }

  getFilteredVehicles(params: GetVehiclesDto) {
    // Start with the full dataset
    let filteredVehicles = vehicles;

    // Apply filters
    filteredVehicles = this.filterVehicles(filteredVehicles, {
      manufacturer: params.manufacturer,
      type: params.type,
      year: params.year,
      priceMin: params.priceMin,
      priceMax: params.priceMax,
    });

    // Apply sorting if specified
    const sortedVehicles = this.sortVehicles(filteredVehicles, params.sort);

    // Apply pagination
    return this.paginateVehicles(sortedVehicles, params.page, params.limit);
  }
}
