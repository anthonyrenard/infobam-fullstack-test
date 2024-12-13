import { IsOptional, IsEnum, IsNumber, Min, Max, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { VehicleType } from '../interfaces/vehicle.interface';

export class FilterVehicleDto {
  @IsOptional()
  @IsString()
  manufacturer?: string;

  @IsOptional()
  @IsEnum(VehicleType)
  type?: VehicleType;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1900)
  yearFrom?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Max(new Date().getFullYear() + 1)
  yearTo?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  priceFrom?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  priceTo?: number; 

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(50)
  limit?: number = 10;

  @IsOptional()
  sortBy?: 'price' | 'year' = 'price';

  @IsOptional()
  sortOrder?: 'asc' | 'desc' = 'asc';
}