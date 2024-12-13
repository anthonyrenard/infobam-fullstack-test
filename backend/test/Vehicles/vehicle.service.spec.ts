import { Test, TestingModule } from '@nestjs/testing';
import { FuelType, PaginatedResponse, Vehicle, VehicleType } from 'src/common/interfaces/vehicle.interface';
import { VehicleRepository } from 'src/modules/vehicles/repositories/vehicle.repository';
import { VehicleService } from 'src/modules/vehicles/services/vehicle.service';

describe('VehicleService', () => {
    let service: VehicleService;
    let repository: jest.Mocked<VehicleRepository>;
  
    const mockRepository = {
      findAll: jest.fn(),
      findById: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    };
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [
          VehicleService,
          {
            provide: VehicleRepository,
            useValue: mockRepository,
          },
        ],
      }).compile();
  
      service = module.get<VehicleService>(VehicleService);
      repository = module.get(VehicleRepository);
    });
  
    describe('findAll', () => {
      it('should return an array of vehicles', async () => {
        const mockResult: PaginatedResponse<Vehicle> = {
          data: [{
            id: '1',
            manufacturer: 'Tesla',
            model: 'Model 3',
            year: 2022,
            type: VehicleType.ELECTRIC,
            price: 45000,
            fuelType: FuelType.ELECTRIC,
            transmission: 'Automatic',
            features: [],
            images: [],
            description: 'Test vehicle',
            createdAt: new Date(),
            updatedAt: new Date()
          }],
          total: 1,
          page: 1,
          totalPages: 1,
          hasNextPage: false,
          hasPreviousPage: false
        };
  
        mockRepository.findAll.mockResolvedValue(mockResult);
        const result = await service.findAll({});
        expect(result).toEqual(mockResult);
      });
    });
  });