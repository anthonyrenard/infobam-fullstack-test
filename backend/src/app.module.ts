import { Module } from '@nestjs/common';
import { VehicleModule } from '@vehicle/vehicle.module';

@Module({
  imports: [VehicleModule],
})
export class AppModule {}
