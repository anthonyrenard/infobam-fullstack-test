import { Module } from '@nestjs/common';
import { VehicleController } from '@vehicle/vehicle.controller';
import { VehicleService } from '@vehicle/vehicle.service';

@Module({
  controllers: [VehicleController],
  providers: [VehicleService],
})
export class VehicleModule {}
