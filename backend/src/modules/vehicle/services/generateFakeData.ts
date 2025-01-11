import { FuelType, Vehicle, VehicleType } from "../entities/vehicle.entity";

export const generateFakeData =()=> {
    const fakeVehicles: Vehicle[] = [];

    const manufacturers = ['BMW', 'Tesla', 'Toyota', 'Ford', 'Honda'];
    const models = ['X5', 'Model 3', 'Camry', 'Mustang', 'Civic'];
    const types = Object.values(VehicleType);
    const fuelTypes = Object.values(FuelType);
    const transmissions = ['Manual', 'Automatic'];

    for (let i = 1; i <= 100; i++) {
        const vehicle = new Vehicle();
        vehicle.id = `${i}`;
        vehicle.manufacturer = manufacturers[Math.floor(Math.random() * manufacturers.length)];
        vehicle.model = models[Math.floor(Math.random() * models.length)];
        vehicle.year = Math.floor(Math.random() * (2024 - 2000)) + 2000;
        vehicle.type = types[Math.floor(Math.random() * types.length)];
        vehicle.price = Math.floor(Math.random() * (50000 - 10000)) + 10000;
        vehicle.fuelType = fuelTypes[Math.floor(Math.random() * fuelTypes.length)];
        vehicle.transmission = transmissions[Math.floor(Math.random() * transmissions.length)];
        vehicle.mileage = Math.floor(Math.random() * (200000 - 5000)) + 5000; ;
        vehicle.features = ['Air Conditioning', 'Bluetooth', 'Navigation System'];
        vehicle.images = ['https://example.com/car1.jpg', 'https://example.com/car2.jpg'];
        vehicle.description = 'A great vehicle for all your transportation needs.';
        vehicle.createdAt = new Date();
        vehicle.updatedAt = new Date();

        fakeVehicles.push(vehicle);
    }
    return fakeVehicles
}