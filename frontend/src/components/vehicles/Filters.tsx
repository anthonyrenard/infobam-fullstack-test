'use client';

import React, { useState } from 'react';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';

interface FiltersProps {
  manufacturer: string;
  setManufacturer: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  year: number | string;
  setYear: React.Dispatch<React.SetStateAction<number | string>>;
  handleSortChange: (field: string) => void;
  sortField: string;
  sortOrder: string;
}

const Filters: React.FC<FiltersProps> = ({
  manufacturer,
  setManufacturer,
  type,
  setType,
  year,
  setYear,
  handleSortChange,
  sortField,
  sortOrder,
}) => {
  const [typedYear,setTypedYear] = useState<number | string>('');
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);


  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTypedYear(value);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    if (value.length === 4) {

      setTypingTimeout(
        setTimeout(() => {
          setYear(value)
        }, 500) 
      );
    }
  };

  return (
    <div className="bg-blue-600 text-white p-4 rounded-md mb-4 shadow-md w-full mx-auto">
      <div className="flex flex-wrap justify-between items-center gap-4">
        {/* Filters Container */}
        <div className="flex gap-4 flex-1">
          {/* Manufacturer Filter */}
          <select
            className="h-12 w-[200px] p-2 bg-white text-gray-700 rounded-md placeholder-gray-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          >
            <option value="">All Manufacturers</option>
            <option value="Toyota">Toyota</option>
            <option value="Ford">Ford</option>
            <option value="BMW">BMW</option>
          </select>

          {/* Type Filter */}
          <select
            className="h-12 w-[200px] p-2 bg-white text-gray-700 rounded-md placeholder-gray-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Truck">Truck</option>
          </select>

          {/* Year Filter */}
          <input
            type="number"
            className="h-12 w-[200px] p-2 bg-white text-gray-700 rounded-md placeholder-gray-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Year"
            value={typedYear}
            onChange={handleYearChange}
          />
        </div>

        {/* Sorting Buttons */}
        <div className="flex gap-4 justify-end">
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-md ${
              sortField === 'price'
                ? 'bg-white text-blue-600'
                : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => handleSortChange('price')}
          >
            {sortOrder === 'ASC' && sortField === 'price' ? (
              <FaSortAmountUp />
            ) : (
              <FaSortAmountDown />
            )}
            Sort by Price
          </button>

          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-md ${
              sortField === 'year'
                ? 'bg-white text-blue-600'
                : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => handleSortChange('year')}
          >
            {sortOrder === 'ASC' && sortField === 'year' ? (
              <FaSortAmountUp />
            ) : (
              <FaSortAmountDown />
            )}
            Sort by Year
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
