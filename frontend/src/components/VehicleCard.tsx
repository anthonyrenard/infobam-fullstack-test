import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Vehicle } from '@/types/vehicle';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <Link href={`/vehicles/${vehicle.id}`}>
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer">
      {/* Image Section with error handling */}
      <div className="relative h-48 bg-gray-200">
        <Image
          src="/images/default-car.png"
          alt={`${vehicle.manufacturer} ${vehicle.model}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          unoptimized 
        />
        <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-md text-sm">
          {vehicle.type}
        </div>
      </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">
            {vehicle.manufacturer} {vehicle.model}
          </h3>
          
          <div className="flex justify-between items-center mb-2">
            <span className="text-xl font-bold text-blue-600">
              ${vehicle.price.toLocaleString()}
            </span>
            <span className="text-gray-600">
              {vehicle.year}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            <div>
              <span className="font-medium">Fuel:</span> {vehicle.fuelType}
            </div>
            <div>
              <span className="font-medium">Trans:</span> {vehicle.transmission}
            </div>
            {vehicle.mileage && (
              <div className="col-span-2">
                <span className="font-medium">Mileage:</span> {vehicle.mileage.toLocaleString()} mi
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}