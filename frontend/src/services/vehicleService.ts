import axios from 'axios';
import { Vehicle, VehicleFilters } from '../types/vehicle';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}


const cleanFilters = (filters: VehicleFilters) => {
    const cleanedFilters: Record<string, unknown> = {};
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        if ((key === 'yearFrom' || key === 'yearTo') && value === 0) {
          return;
        }
        cleanedFilters[key] = value;
      }
    });
  
    return cleanedFilters;
  };
  
  export const vehicleService = {
    async getVehicles(filters: VehicleFilters): Promise<PaginatedResponse<Vehicle>> {
      try {
        const cleanedFilters = cleanFilters(filters);
        const response = await axios.get(`${API_URL}/vehicles`, {
          params: cleanedFilters
        });
        return response.data;
      } catch (error) {
        console.error('Error fetching vehicles:', error);
        throw error;
      }
    },
  
    async getVehicleById(id: string): Promise<Vehicle> {
      try {
        const response = await axios.get(`${API_URL}/vehicles/${id}`);
        return response.data;
      } catch (error) {
        console.error(`Error fetching vehicle ${id}:`, error);
        throw error;
      }
    }
  };