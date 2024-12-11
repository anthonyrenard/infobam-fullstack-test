import { IsInt, IsOptional, IsEnum, Min, Max, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { VehicleType, SortBy } from '@vehicle/vehicle.interface';

export class GetVehiclesDto {
  @IsInt()
  @Min(1)
  @Type(() => Number)
  page: number = 1; // Default to page 1 if not provided

  @IsInt()
  @Min(1)
  @Max(100)
  @Type(() => Number)
  limit: number = 10; // Default to 10 items per page if not provided

  @IsOptional()
  @IsString()
  manufacturer?: string;

  @IsOptional()
  @IsEnum(VehicleType)
  type?: VehicleType;

  @IsOptional()
  @Type(() => Number)
  year?: number;

  @IsOptional()
  @IsEnum(SortBy)
  sort?: SortBy;

  @IsOptional()
  @Type(() => Number)
  priceMin?: number;

  @IsOptional()
  @Type(() => Number)
  priceMax?: number;
}
