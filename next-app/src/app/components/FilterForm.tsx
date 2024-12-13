'use client';

import { VehicleType } from '../../models/vehicle';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const FilterForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [manufacturer, setManufacturer] = useState(searchParams.get('manufacturer') || '');
  const [type, setType] = useState(searchParams.get('type') as VehicleType || '');
  const [year, setYear] = useState(searchParams.get('year') || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params: string[] = [];

    if (manufacturer) params.push(`manufacturer=${encodeURIComponent(manufacturer)}`);
    if (type) params.push(`type=${encodeURIComponent(type)}`);
    if (year) params.push(`year=${encodeURIComponent(year)}`);

    router.push(`/?${params.join('&')}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:space-x-4 mb-4">
      <input
        type="text"
        placeholder="Manufacturer"
        value={manufacturer}
        onChange={(e) => setManufacturer(e.target.value)}
        className="input input-bordered w-full max-w-xs mb-2 md:mb-0"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value as VehicleType)}
        className="select select-bordered w-full max-w-xs mb-2 md:mb-0"
      >
        <option value="">All Types</option>
        {Object.values(VehicleType).map(typeOption => (
          <option key={typeOption} value={typeOption}>{typeOption}</option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="input input-bordered w-full max-w-xs mb-2 md:mb-0"
      />
      <button type="submit" className="btn btn-primary">
        Apply Filters
      </button>
    </form>
  );
};

export default FilterForm;
