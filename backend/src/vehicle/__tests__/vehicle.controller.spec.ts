import { Test, TestingModule } from '@nestjs/testing';
import { VehicleController } from '@vehicle/vehicle.controller';
import { VehicleService } from '@vehicle/vehicle.service';
import { vehicles } from '@vehicle/vehicle.mock-data';
import { GetVehiclesDto } from '@vehicle/get-vehicles.dto';
import { ValidationPipe } from '@nestjs/common';

describe('VehicleController', () => {
  let controller: VehicleController;
  let service: VehicleService;
  let validationPipe: ValidationPipe;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicleController],
      providers: [
        {
          provide: VehicleService,
          useValue: {
            getFilteredVehicles: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<VehicleController>(VehicleController);
    service = module.get<VehicleService>(VehicleService);

    validationPipe = new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    });
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getVehicles', () => {
    it('should return paginated vehicle data for valid queries', () => {
      const query: GetVehiclesDto = {
        page: 1,
        limit: 2,
        manufacturer: undefined,
        type: undefined,
        year: undefined,
        sort: undefined,
        priceMin: undefined,
        priceMax: undefined,
      };

      jest.spyOn(service, 'getFilteredVehicles').mockReturnValue({
        data: vehicles.slice(0, 2),
        total: vehicles.length,
        page: 1,
        limit: 2,
        totalPages: Math.ceil(vehicles.length / 2),
        hasNextPage: true,
        hasPreviousPage: false,
      });

      const result = controller.getVehicles(query);

      expect(result).toEqual({
        data: vehicles.slice(0, 2),
        total: vehicles.length,
        page: 1,
        limit: 2,
        totalPages: Math.ceil(vehicles.length / 2),
        hasNextPage: true,
        hasPreviousPage: false,
      });

      expect(service.getFilteredVehicles).toHaveBeenCalledWith(query);
    });

    it('should return empty data if service returns no results', () => {
      const query: GetVehiclesDto = {
        page: 1,
        limit: 2,
        manufacturer: 'NonExistent',
        type: undefined,
        year: undefined,
        sort: undefined,
        priceMin: undefined,
        priceMax: undefined,
      };

      jest.spyOn(service, 'getFilteredVehicles').mockReturnValue({
        data: [],
        total: 0,
        page: 1,
        limit: 2,
        totalPages: 0,
        hasNextPage: false,
        hasPreviousPage: false,
      });

      const result = controller.getVehicles(query);

      expect(result).toEqual({
        data: [],
        total: 0,
        page: 1,
        limit: 2,
        totalPages: 0,
        hasNextPage: false,
        hasPreviousPage: false,
      });

      expect(service.getFilteredVehicles).toHaveBeenCalledWith(query);
    });

    it('should throw an error if the service fails', () => {
      const query: GetVehiclesDto = {
        page: 1,
        limit: 2,
        manufacturer: undefined,
        type: undefined,
        year: undefined,
        sort: undefined,
        priceMin: undefined,
        priceMax: undefined,
      };

      jest.spyOn(service, 'getFilteredVehicles').mockImplementation(() => {
        throw new Error('Service failure');
      });

      expect(() => controller.getVehicles(query)).toThrow('Service failure');
    });

    it('should handle invalid queries gracefully', async () => {
      const query: any = {
        page: 'invalid', // invalid page
        limit: -10, // invalid limit
      };

      try {
        // Apply validation and transformation
        await validationPipe.transform(query, {
          type: 'query',
          metatype: GetVehiclesDto,
        });
      } catch (error) {
        expect(error.getResponse()).toEqual({
          statusCode: 400,
          message: [
            'page must not be less than 1',
            'page must be an integer number',
            'limit must not be less than 1',
          ],
          error: 'Bad Request',
        });
      }
    });

    it('should throw an error for completely invalid query parameters', () => {
      const query: any = {
        page: 'invalid',
        limit: 'invalid',
      };

      expect(() => controller.getVehicles(query)).toThrow();
    });
  });
});
