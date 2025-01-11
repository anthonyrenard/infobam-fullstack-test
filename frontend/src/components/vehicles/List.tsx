'use client';

import React from 'react';
import Link from 'next/link';
import { FaCar, FaBuilding, FaTag, FaCogs } from 'react-icons/fa';
import { Vehicle } from '@/types/vehicle.type';

interface VehiclesListWithPaginationProps {
  vehicles: Vehicle[];
  total: number;
  page: number;
  handlePageChange: (newPage: number) => void;
}

const VehiclesListWithPagination: React.FC<VehiclesListWithPaginationProps> = ({
  vehicles,
  total,
  page,
  handlePageChange,
}) => {
  const totalPages = Math.ceil(total / 10);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="border border-gray-400 shadow-lg p-4 rounded-md flex flex-col justify-between"
          >
            <Link href={`/vehicles/${vehicle.id}`}>

              <img
                  src={`https://images.squarespace-cdn.com/content/v1/5e7918a4b1051f6e49dcfdb1/1586051420183-18ODKP7TCTJEFTF340K1/175_rtqd_web_RM.jpg`}
                  alt={vehicle.model}
                  className="w-full h-48 object-cover mb-4"
                />

                <div className="mt-auto flex flex-col space-y-2">
                  <h2 className="text-xl font-semibold">
                      {vehicle.manufacturer} {vehicle.model}

                  </h2>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <FaBuilding />
                    <p>{vehicle.manufacturer}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <FaCar />
                    <p>{vehicle.type}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <FaCogs />
                    <p>{vehicle.transmission}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <FaTag />
                    <p>{vehicle.year}</p>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <p className="text-lg font-semibold text-black">${vehicle.price}</p>
                </div>
                
            </Link>
            
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={() => handlePageChange(page > 1 ? page - 1 : 1)}
        >
          Previous
        </button>

        <span className="text-black">
          Page {page} of {totalPages}
        </span>

        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={() => handlePageChange(page < totalPages ? page + 1 : page)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default VehiclesListWithPagination;
