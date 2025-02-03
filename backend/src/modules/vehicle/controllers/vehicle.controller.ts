import { Controller, Get, Query, Param, NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../entities/vehicle.entity';
import { GetVehiclesQueryDto } from '../dto/find.dto';

@Controller('vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  /**
   * Endpoint to get a paginated list of vehicles with optional filters and sorting.
   * @param page - Current page number.
   * @param limit - Number of vehicles per page.
   * @param manufacturer - Filter by vehicle manufacturer.
   * @param type - Filter by vehicle type.
   * @param year - Filter by vehicle year.
   * @param sortField - Sort by field (price or year).
   * @param sortOrder - Sort order (ASC or DESC).
   */
  @Get()
  async getPaginatedVehicles(
    @Query() query: GetVehiclesQueryDto,
  ): Promise<{ data: Vehicle[]; total: number }> {
    try {
      const { page, limit, manufacturer, type, year, sortField, sortOrder } = query;

      if (page <= 0 || limit <= 0) {
        throw new BadRequestException('Page and limit must be greater than 0.');
      }

      const filters = { manufacturer, type, year };
      const sort = sortField && sortOrder ? { field: sortField, order: sortOrder } : undefined;

      const result = await this.vehicleService.getVehicles(page, limit, filters, sort);
      return result;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('Error occurred while fetching vehicles');
    }
  }

  /**
   * Endpoint to get detailed information about a specific vehicle by ID.
   * @param id - Vehicle ID.
   */
  @Get(':id')
  async getVehicleById(@Param('id') id: string): Promise<Vehicle> {
    try {
      const vehicle = await this.vehicleService.getVehicleById(id);
      if (!vehicle) {
        throw new NotFoundException(`Vehicle with ID ${id} not found`);
      }
      return vehicle;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error occurred while retrieving the vehicle');
    }
  }
}
