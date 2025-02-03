import { IsOptional, IsString, IsEnum, IsNumber, IsInt, IsIn } from 'class-validator';

export class GetVehiclesQueryDto {
  @IsOptional()
  @IsString()
  manufacturer?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsNumber()
  @IsInt()
  year?: number;

  @IsOptional()
  @IsString()
  @IsIn(['price', 'year'])
  sortField?: 'price' | 'year';

  @IsOptional()
  @IsString()
  @IsIn(['ASC', 'DESC'])
  sortOrder?: 'ASC' | 'DESC';

  @IsOptional()
  @IsNumber()
  @IsInt()
  page?: number = 1;

  @IsOptional()
  @IsNumber()
  @IsInt()
  limit?: number = 10;
}
