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
  
  export interface VehicleFilters {
    manufacturer?: string;
    type?: VehicleType;
    yearFrom?: number;
    yearTo?: number;
    priceFrom?: number;
    priceTo?: number;
    sortBy?: 'price' | 'year';
    sortOrder?: 'asc' | 'desc';
    page: number;
    limit: number;
  }

  interface FilterChangeHandler {
    (filters: {
      manufacturer?: string;
      type?: VehicleType;
      yearFrom?: number;
      yearTo?: number;
      priceFrom?: number;
      priceTo?: number;
      sortBy?: 'price' | 'year';
      sortOrder?: 'asc' | 'desc';
    }): void;
  }
  
 export interface VehicleFiltersProps {
    onFilterChange: FilterChangeHandler;
  }