import { Module } from '@nestjs/common';
import { VehicleController } from './controllers/vehicle.controller';
import { VehicleService } from './services/vehicle.service';
import { VehicleRepository } from './repositories/vehicle.repository';

@Module({
  controllers: [VehicleController],
  providers: [
    VehicleService, 
    VehicleRepository
  ],
  exports: [VehicleService]
})
export class VehiclesModule {}