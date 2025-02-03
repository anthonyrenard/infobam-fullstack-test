import { Test, TestingModule } from '@nestjs/testing';
import { VehicleService } from './vehicle.service';
import { NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';

describe('VehicleService', () => {
  let service: VehicleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehicleService],
    }).compile();

    service = module.get<VehicleService>(VehicleService);
  });

  describe('getVehicles', () => {
    it('should return paginated vehicles with default filters', async () => {
      const result = await service.getVehicles();
      expect(result).toHaveProperty('data');
      expect(result).toHaveProperty('total');
      expect(result.data.length).toBeGreaterThan(0);
    });

    it('should apply filters correctly', async () => {
      const result = await service.getVehicles(1, 10, { manufacturer: 'Toyota' });
      expect(result.data.every(vehicle => vehicle.manufacturer === 'Toyota')).toBe(true);
    });

    it('should apply sorting by price in ascending order', async () => {
      const result = await service.getVehicles(1, 10, {}, { field: 'price', order: 'ASC' });
      const prices = result.data.map(vehicle => vehicle.price);
      expect(prices).toEqual(prices.sort((a, b) => a - b));
    });

    it('should throw BadRequestException for invalid page or limit', async () => {
      await expect(service.getVehicles(0, 10)).rejects.toThrow(BadRequestException);
    });

    it('should throw NotFoundException if no vehicles match filters', async () => {
      await expect(
        service.getVehicles(1, 10, { manufacturer: 'NonExistentManufacturer' })
      ).rejects.toThrow(NotFoundException);
    });

    it('should handle pagination correctly', async () => {
      const result = await service.getVehicles(1, 5);
      expect(result.data.length).toBeLessThanOrEqual(5);
    });
  });

  describe('getVehicleById', () => {
    it('should return a vehicle by ID', async () => {
      const vehicles = await service.getVehicles();
      const vehicle = await service.getVehicleById(vehicles.data[0].id);
      expect(vehicle).toHaveProperty('id');
    });

    it('should throw NotFoundException for invalid ID', async () => {
      await expect(service.getVehicleById('nonexistent-id')).rejects.toThrow(NotFoundException);
    });
  });
});
