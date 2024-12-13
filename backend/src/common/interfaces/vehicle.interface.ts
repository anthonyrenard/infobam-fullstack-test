export enum VehicleType {
    SUV = 'SUV',
    SEDAN = 'SEDAN',
    TRUCK = 'TRUCK',
    SPORTS = 'SPORTS',
    LUXURY = 'LUXURY',
    ELECTRIC = 'ELECTRIC'
  }
  
  export enum FuelType {
    GASOLINE = 'GASOLINE',
    DIESEL = 'DIESEL',
    ELECTRIC = 'ELECTRIC',
    HYBRID = 'HYBRID',
    PLUGIN_HYBRID = 'PLUGIN_HYBRID'
  }
  
  export interface Vehicle {
    id: string;
    manufacturer: string;
    model: string;
    year: number;
    type: VehicleType;
    price: number;
    fuelType: FuelType;
    transmission: string;
    mileage?: number;
    features: string[];
    images: string[];
    description: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface VehicleFilterOptions {
    manufacturer?: string;
    type?: VehicleType;
    yearFrom?: number;
    yearTo?: number;
    priceFrom?: number;
    priceTo?: number;
    page?: number;
    limit?: number;
    sortBy?: 'price' | 'year';
    sortOrder?: 'asc' | 'desc';
  }
  
  export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  }