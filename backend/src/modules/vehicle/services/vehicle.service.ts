import { Injectable } from '@nestjs/common';
import { Vehicle } from '../entities/vehicle.entity';
import { generateFakeData } from './generateFakeData';

@Injectable()
export class VehicleService {
    private vehicles: Vehicle[] = [];
    
    constructor() {
        this.generateFakeData();
    }

    private generateFakeData() {
        const fakeVehicles: Vehicle[] = generateFakeData();
        this.vehicles = fakeVehicles;
    }

    async getVehicles(
        page: number = 1,
        limit: number = 10,
        filters: { manufacturer?: string; type?: string; year?: number } = {},
        sort?: { field: 'price' | 'year'; order: 'ASC' | 'DESC' },
    ): Promise<{ data: Vehicle[]; total: number }> {
        let filteredVehicles = this.vehicles;

        if (filters.manufacturer) {
        filteredVehicles = filteredVehicles.filter(vehicle => vehicle.manufacturer === filters.manufacturer);
        }
        if (filters.type) {
        filteredVehicles = filteredVehicles.filter(vehicle => vehicle.type === filters.type);
        }
        if (filters.year) {
        filteredVehicles = filteredVehicles.filter(vehicle => vehicle.year === filters.year);
        }

        if (sort) {
        filteredVehicles = filteredVehicles.sort((a, b) => {
            if (sort.field === 'price') {
            return sort.order === 'ASC' ? a.price - b.price : b.price - a.price;
            } else if (sort.field === 'year') {
            return sort.order === 'ASC' ? a.year - b.year : b.year - a.year;
            }
            return 0;
        });
        }

        const total = filteredVehicles.length;
        filteredVehicles = filteredVehicles.slice((page - 1) * limit, page * limit);

        return { data: filteredVehicles, total };
    }

    async getVehicleById(id: string): Promise<Vehicle> {
        return this.vehicles.find(vehicle => vehicle.id === id);
    }
}
