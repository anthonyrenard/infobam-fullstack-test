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

