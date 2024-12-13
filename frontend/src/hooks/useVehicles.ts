import { useState, useEffect } from 'react';
import { Vehicle, VehicleFilters, VehicleType } from '../types/vehicle';
import { vehicleService, PaginatedResponse } from '../services/vehicleService';

const defaultFilters: VehicleFilters = {
  page: 1,
  limit: 10,
  sortBy: 'price',
  sortOrder: 'asc'
};

export function useVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filters, setFilters] = useState<VehicleFilters>(defaultFilters);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<Omit<PaginatedResponse<Vehicle>, 'data'>>({
    total: 0,
    page: 1,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false
  });

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        setLoading(true);
        const response = await vehicleService.getVehicles(filters);
        setVehicles(response.data);
        const { data, ...paginationInfo } = response;
        setPagination(paginationInfo);
      } catch (err) {
        setError('Failed to fetch vehicles');
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, [filters]);

  const updateFilters = (newFilters: Partial<VehicleFilters>) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters,
      page: newFilters.page || 1 // Reset to first page when filters change
    }));
  };

  return {
    vehicles,
    loading,
    error,
    filters,
    pagination,
    updateFilters
  };
}