export interface Vehicle {
    id: string;
    manufacturer: string; // e.g., "BMW", "Tesla", "Toyota"
    model: string; // e.g., "X5", "Model 3", "Camry"
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

export enum VehicleType {
    SUV = "SUV",
    SEDAN = "SEDAN",
    TRUCK = "TRUCK",
    SPORTS = "SPORTS",
    LUXURY = "LUXURY",
    ELECTRIC = "ELECTRIC",
}

export enum FuelType {
    GASOLINE = "GASOLINE",
    DIESEL = "DIESEL",
    ELECTRIC = "ELECTRIC",
    HYBRID = "HYBRID",
    PLUGIN_HYBRID = "PLUGIN_HYBRID",
}

export interface VehicleResponse {
    data: Vehicle[];
    totalPages: number;
}

export interface VehicleFilterOptions {
    manufacturersOptions: string[];
    typesOptions: string[];
    yearsOptions: string[];
}

export interface VehicleFilterData {
    manufacturer: string;
    type: string;
    year: string;
}

export interface VehicleSortByOptions {
    sortByOptions: string[];
}