import VehiculeCard from "./VehiculeCard";
import { Vehicle } from "@/types/Vehicle";

interface VehiculeListProps {
  vehicles: Vehicle[];
}

export default function VehiculeList({ vehicles }: VehiculeListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {vehicles.map((vehicle) => (
        <VehiculeCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
}