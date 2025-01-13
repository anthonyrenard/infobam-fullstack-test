import { Test, TestingModule } from '@nestjs/testing';
import { VehicleController } from './vehicle.controller';
import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../entities/vehicle.entity';
import { NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { GetVehiclesQueryDto } from '../dto/find.dto';

describe('VehicleController', () => {
  let controller: VehicleController;
  let service: VehicleService;

  const mockVehicleService = {
    getVehicles: jest.fn(),
    getVehicleById: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicleController],
      providers: [
        {
          provide: VehicleService,
          useValue: mockVehicleService,
        },
      ],
    }).compile();

    controller = module.get<VehicleController>(VehicleController);
    service = module.get<VehicleService>(VehicleService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getPaginatedVehicles', () => {
    it('should return paginated vehicles', async () => {
      const result = {
        data: [{ id: '1', manufacturer: 'Toyota', model: 'Corolla', price: 20000 } as Vehicle],
        total: 1,
      };
      mockVehicleService.getVehicles.mockResolvedValue(result);

      const query: GetVehiclesQueryDto = {
        page: 1,
        limit: 10,
        manufacturer: 'Toyota',
        type: undefined,
        year: undefined,
        sortField: 'price',
        sortOrder: 'ASC',
      };

      const response = await controller.getPaginatedVehicles(query);
      expect(service.getVehicles).toHaveBeenCalledWith(
        query.page,
        query.limit,
        { manufacturer: query.manufacturer, type: query.type, year: query.year },
        { field: query.sortField, order: query.sortOrder },
      );
      expect(response).toEqual(result);
    });

    it('should throw BadRequestException if page or limit is invalid', async () => {
      const query: GetVehiclesQueryDto = { page: 0, limit: 10, sortField: 'price', sortOrder: 'ASC' };

      await expect(controller.getPaginatedVehicles(query)).rejects.toThrow(BadRequestException);
    });

    it('should throw InternalServerErrorException on other errors', async () => {
      const query = { page: 1, limit: 10 };
      mockVehicleService.getVehicles.mockRejectedValue(new Error('Unexpected Error'));

      await expect(controller.getPaginatedVehicles(query)).rejects.toThrow(InternalServerErrorException);
    });
  });

  describe('getVehicleById', () => {
    it('should return a vehicle by ID', async () => {
      const vehicle = { id: '1', manufacturer: 'Toyota', model: 'Corolla', price: 20000 } as Vehicle;
      mockVehicleService.getVehicleById.mockResolvedValue(vehicle);

      const response = await controller.getVehicleById('1');
      expect(service.getVehicleById).toHaveBeenCalledWith('1');
      expect(response).toEqual(vehicle);
    });

    it('should throw NotFoundException if vehicle is not found', async () => {
      mockVehicleService.getVehicleById.mockRejectedValue(new NotFoundException());

      await expect(controller.getVehicleById('999')).rejects.toThrow(NotFoundException);
    });

    it('should throw InternalServerErrorException on other errors', async () => {
      mockVehicleService.getVehicleById.mockRejectedValue(new Error('Unexpected Error'));

      await expect(controller.getVehicleById('1')).rejects.toThrow(InternalServerErrorException);
    });
  });
});
