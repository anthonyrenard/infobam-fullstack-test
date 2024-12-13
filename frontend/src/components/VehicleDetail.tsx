import React from 'react';
import Image from 'next/image';
import { Vehicle } from '@/types/vehicle';

interface VehicleDetailProps {
  vehicle: Vehicle;
}

export default function VehicleDetail({ vehicle }: VehicleDetailProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image Gallery */}
      <div className="relative h-96">
        <Image
          src="/images/default-car.png"
          alt={`${vehicle.manufacturer} ${vehicle.model}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Vehicle Info */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {vehicle.manufacturer} {vehicle.model}
            </h1>
            <p className="text-gray-600">{vehicle.year} • {vehicle.type}</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-blue-600">
              ${vehicle.price.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-sm text-gray-600">Fuel Type</p>
            <p className="font-semibold">{vehicle.fuelType}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-sm text-gray-600">Transmission</p>
            <p className="font-semibold">{vehicle.transmission}</p>
          </div>
          {vehicle.mileage && (
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-sm text-gray-600">Mileage</p>
              <p className="font-semibold">{vehicle.mileage.toLocaleString()} mi</p>
            </div>
          )}
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-sm text-gray-600">Type</p>
            <p className="font-semibold">{vehicle.type}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700 leading-relaxed">{vehicle.description}</p>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {vehicle.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}