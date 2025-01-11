import React from "react";
import { Vehicle } from "../../../types/vehicle.type";
import { FaCar, FaTag, FaCalendarAlt, FaInfoCircle } from "react-icons/fa";

async function fetchVehicle(id: string): Promise<Vehicle> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles/${id}`, { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Vehicle not found");
  }
  return response.json();
}

const VehicleDetails = async ({ params }: { params: { id: string } }) => {
  try {
    const vehicle = await fetchVehicle(params.id);

    return (
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={"https://images.squarespace-cdn.com/content/v1/5e7918a4b1051f6e49dcfdb1/1586051420183-18ODKP7TCTJEFTF340K1/175_rtqd_web_RM.jpg"} // Placeholder image
              alt={vehicle.model}
              className="w-full h-96 object-cover rounded-md shadow-md"
            />
          </div>

          {/* Details Section */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900">
              {vehicle.manufacturer} {vehicle.model}
            </h1>

            {/* Price */}
            <div className="flex items-center space-x-2 mt-4">
              <FaTag className="text-gray-600" />
              <p className="text-xl font-semibold text-gray-700">${vehicle.price}</p>
            </div>

            {/* Year */}
            <div className="flex items-center space-x-2 mt-4">
              <FaCalendarAlt className="text-gray-600" />
              <p className="text-lg text-gray-600">Year: {vehicle.year}</p>
            </div>

            {/* Description */}
            <div className="flex items-center space-x-2 mt-4">
              <FaInfoCircle className="text-gray-600" />
              <p className="text-md text-gray-500">{vehicle.description}</p>
            </div>

            {/* Type */}
            <div className="flex items-center space-x-2 mt-4">
              <FaCar className="text-gray-600" />
              <p className="text-md text-gray-600">Type: {vehicle.type}</p>
            </div>

            {/* Additional Information */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-800">Additional Information</h2>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li className="text-md text-gray-600"><strong>Transmission:</strong> {vehicle.transmission}</li>
                <li className="text-md text-gray-600"><strong>Fuel Type:</strong> {vehicle.fuelType}</li>
                <li className="text-md text-gray-600"><strong>Mile age:</strong> {vehicle.mileage}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error: any) {
    return <div className="container mx-auto p-4 text-red-600">Error: {error.message}</div>;
  }
};

export default VehicleDetails;
