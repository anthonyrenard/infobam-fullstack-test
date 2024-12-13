import React from 'react';
import { VehicleFiltersProps, VehicleType } from '../types/vehicle';


  
export default function VehicleFilters({ onFilterChange }: VehicleFiltersProps) {
  const manufacturers = ['BMW', 'Tesla', 'Toyota', 'Ford', 'Honda'];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

  const handleFilterChange = (filterKey: string, value: unknown) => {
    if (value === '' || value === 0) {
      onFilterChange({ [filterKey]: undefined });
    } else {
      onFilterChange({ [filterKey]: value });
    }
  };


  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Manufacturer Filter */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Manufacturer
          </label>
          <select
            onChange={(e) => handleFilterChange('manufacturer', e.target.value  || undefined)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">All Manufacturers</option>
            {manufacturers.map(manufacturer => (
              <option key={manufacturer} value={manufacturer}>
                {manufacturer}
              </option>
            ))}
          </select>
        </div>

        {/* Vehicle Type Filter */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Vehicle Type
          </label>
          <select
            onChange={(e) => onFilterChange({ 
              type: e.target.value as VehicleType || undefined 
            })}
            className="w-full p-2 border rounded-md"
          >          
            <option value="">All Types</option>
            {Object.values(VehicleType).map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Year Range Filter */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Year From
          </label>
          <select
        onChange={(e) => handleFilterChange('yearFrom', Number(e.target.value) || undefined)}
        className="w-full p-2 border rounded-md"
        >
            
            <option value="">Any Year</option>
            {years.map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Options */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Sort By
          </label>
          <div className="flex gap-2">
            <select
              onChange={(e) => onFilterChange({ 
                sortBy: e.target.value as 'price' | 'year'
              })}
              className="flex-1 p-2 border rounded-md"
            >
              <option value="price">Price</option>
              <option value="year">Year</option>
            </select>
            <select
              onChange={(e) => onFilterChange({ 
                sortOrder: e.target.value as 'asc' | 'desc'
              })}
              className="flex-1 p-2 border rounded-md"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}