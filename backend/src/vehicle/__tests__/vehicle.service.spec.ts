import { VehicleService } from '@vehicle/vehicle.service';
import { vehicles as mockVehicles } from '@vehicle/vehicle.mock-data';
import {
  FuelType,
  SortBy,
  Vehicle,
  VehicleType,
} from '@vehicle/vehicle.interface';

describe('VehicleService', () => {
  let service: VehicleService;

  beforeEach(() => {
    service = new VehicleService();
  });
  describe('filterVehicles', () => {
    const mockVehicles: Vehicle[] = [
      {
        id: '1',
        manufacturer: 'Tesla',
        model: 'Model 3',
        year: 2022,
        type: VehicleType.ELECTRIC,
        price: 55000,
        fuelType: FuelType.ELECTRIC,
        transmission: 'Automatic',
        mileage: 15000,
        features: [],
        images: [],
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        manufacturer: 'BMW',
        model: 'X5',
        year: 2021,
        type: VehicleType.SUV,
        price: 70000,
        fuelType: FuelType.GASOLINE,
        transmission: 'Automatic',
        mileage: 20000,
        features: [],
        images: [],
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    it('should filter by manufacturer', () => {
      const result = service.filterVehicles(mockVehicles, {
        manufacturer: 'Tesla',
      });
      expect(result.length).toBe(1);
      expect(result[0].manufacturer).toBe('Tesla');
    });

    it('should filter by type', () => {
      const result = service.filterVehicles(mockVehicles, {
        type: VehicleType.ELECTRIC,
      });
      expect(result.length).toBe(1);
      expect(result[0].type).toBe(VehicleType.ELECTRIC);
    });

    it('should filter by year', () => {
      const result = service.filterVehicles(mockVehicles, { year: 2021 });
      expect(result.length).toBe(1);
      expect(result[0].year).toBe(2021);
    });

    it('should handle multiple filters', () => {
      const result = service.filterVehicles(mockVehicles, {
        manufacturer: 'Tesla',
        year: 2022,
      });
      expect(result.length).toBe(1);
      expect(result[0].manufacturer).toBe('Tesla');
      expect(result[0].year).toBe(2022);
    });

    it('should return all vehicles if no filters are applied', () => {
      const result = service.filterVehicles(mockVehicles, {});
      expect(result.length).toBe(mockVehicles.length);
    });
    it('should filter by price', () => {
      const result = service.filterVehicles(mockVehicles, {
        priceMin: 60000,
        priceMax: 80000,
      });
      expect(result.length).toBe(1);
      expect(result[0].price).toBe(70000);
    });
  });

  describe('sortVehicles', () => {
    it('should sort by price in ascending order', () => {
      const result = service.sortVehicles(mockVehicles, SortBy.PRICE);
      expect(result[0].price).toBe(30000);
      expect(result[1].price).toBe(45000);
    });

    it('should sort by year in descending order', () => {
      const result = service.sortVehicles(mockVehicles, SortBy.YEAR);
      expect(result[0].year).toBe(2023);
      expect(result[1].year).toBe(2022);
    });

    it('should handle invalid sortBy gracefully', () => {
      const result = service.sortVehicles(mockVehicles, 'invalid' as SortBy);
      expect(result).toEqual(mockVehicles);
    });
  });
  describe('paginateVehicles', () => {
    it('should return the correct paginated results for page 1', () => {
      const result = service.paginateVehicles(mockVehicles, 1, 1);
      expect(result.data.length).toBe(1);
      expect(result.total).toBe(6);
      expect(result.page).toBe(1);
      expect(result.limit).toBe(1);
      expect(result.totalPages).toBe(6);
      expect(result.hasNextPage).toBe(true);
      expect(result.hasPreviousPage).toBe(false);
    });

    it('should handle invalid page numbers gracefully', () => {
      const result = service.paginateVehicles(mockVehicles, -1, 1);
      expect(result.page).toBe(1);
    });

    it('should handle invalid limits gracefully', () => {
      const result = service.paginateVehicles(mockVehicles, 1, 0);
      expect(result.limit).toBe(1);
    });

    it('should return an empty array if page exceeds total pages', () => {
      const data = [
        {
          id: '1',
          manufacturer: 'Tesla',
          model: 'Model 3',
          year: 2022,
          type: VehicleType.ELECTRIC,
          price: 55000,
          fuelType: FuelType.ELECTRIC,
          transmission: 'Automatic',
          mileage: 15000,
          features: [],
          images: [],
          description: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2',
          manufacturer: 'BMW',
          model: 'X5',
          year: 2021,
          type: VehicleType.SUV,
          price: 70000,
          fuelType: FuelType.GASOLINE,
          transmission: 'Automatic',
          mileage: 20000,
          features: [],
          images: [],
          description: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      const result = service.paginateVehicles(data, 3, 1);

      expect(result.data.length).toBe(0); // No data on page 3
      expect(result.page).toBe(3); //
      expect(result.totalPages).toBe(2);
      expect(result.hasNextPage).toBe(false);
      expect(result.hasPreviousPage).toBe(true);
    });
  });
  it('should return an empty array if page exceeds total pages', () => {
    const result = service.paginateVehicles(mockVehicles, 999, 2);
    expect(result.data).toEqual([]);
  });
  describe('getFilteredVehicles', () => {
    it('should filter, sort, and paginate vehicles correctly', () => {
      const params = {
        page: 1,
        limit: 2,
        manufacturer: 'Tesla',
        type: VehicleType.ELECTRIC,
        fuelType: 'ELECTRIC',
        year: 2022,
        sort: SortBy.PRICE,
        priceMin: 50000,
        priceMax: 60000,
      };

      const result = service.getFilteredVehicles(params);

      expect(result.data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: '1',
            manufacturer: 'Tesla',
            type: VehicleType.ELECTRIC,
            fuelType: 'ELECTRIC',
            year: 2022,
            price: 55000,
          }),
        ]),
      );
      expect(result.total).toBe(1);
      expect(result.page).toBe(1);
      expect(result.limit).toBe(2);
      expect(result.totalPages).toBe(1);
      expect(result.hasNextPage).toBe(false);
      expect(result.hasPreviousPage).toBe(false);
    });

    it('should return all vehicles if no filters are applied', () => {
      const params = {
        page: 1,
        limit: 10,
      };

      const result = service.getFilteredVehicles(params);

      expect(result.data.length).toBe(Math.min(10, mockVehicles.length));
      expect(result.total).toBe(mockVehicles.length);
    });

    it('should handle empty results gracefully', () => {
      const params = {
        page: 1,
        limit: 10,
        manufacturer: 'NonExistent',
      };

      const result = service.getFilteredVehicles(params);

      expect(result.data).toEqual([]);
      expect(result.total).toBe(0);
      expect(result.page).toBe(1);
      expect(result.totalPages).toBe(0);
      expect(result.hasNextPage).toBe(false);
      expect(result.hasPreviousPage).toBe(false);
    });
  });
});
