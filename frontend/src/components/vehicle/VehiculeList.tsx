"use client";

import VehiculeCard from "./VehiculeCard";
import { Vehicle } from "@/types/Vehicle";
import { useVehicle } from "@/hooks/useVehicle";

export default function VehiculeList() {
  const { vehicles } = useVehicle();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {vehicles.map((vehicle: Vehicle) => (
        <VehiculeCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
}