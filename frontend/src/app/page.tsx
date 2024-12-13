'use client'

import VehicleFilters from '@/components/VehicleFilters'
import VehicleList from '@/components/VehicleList'
import { useVehicles } from '@/hooks/useVehicles'
import { VehicleFiltersProps } from '@/types/vehicle';

export default function Home() {
  const { 
    vehicles, 
    loading, 
    error, 
    filters, 
    pagination, 
    updateFilters 
  } = useVehicles();

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Vehicle Showcase</h1>
      
      <VehicleFilters 
        onFilterChange={(newFilters : VehicleFiltersProps) => updateFilters(newFilters)} 
      />
      
      <VehicleList
        vehicles={vehicles}
        loading={loading}
        error={error}
        page={pagination.page}
        totalPages={pagination.totalPages}
        onPageChange={(page : number) => updateFilters({ page })}
      />
    </>
  )
}