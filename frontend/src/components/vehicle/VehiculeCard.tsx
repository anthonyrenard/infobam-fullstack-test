import { Vehicle } from "@/types/Vehicle";
import { FaCar, FaCalendarAlt, FaGasPump, FaCog, FaRoad, FaList } from 'react-icons/fa';

interface VehiculeCardProps {
    vehicle: Vehicle;
    setSelectedVehicle: (vehicle: Vehicle) => void;
}

export default function VehiculeCard({ vehicle, setSelectedVehicle }: VehiculeCardProps) {
    
    return (
        <div className="card bg-base-100 h-full w-96 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="relative h-48">
                <img
                    src={vehicle.images[0]}
                    alt={vehicle.model}
                    className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-primary text-primary-content px-3 py-1 rounded-full">
                    {vehicle.price} €
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-bold mb-2">{vehicle.model}</h2>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-primary" />
                        <span>{vehicle.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaGasPump className="text-primary" />
                        <span>{vehicle.fuelType}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCog className="text-primary" />
                        <span>{vehicle.transmission}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaRoad className="text-primary" />
                        <span>{vehicle.mileage} km</span>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        {/* <FaList className="text-primary" /> */}
                        <span className="font-semibold">Caractéristiques</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {vehicle.features.map((feature, index) => (
                            <span key={index} className="badge badge-outline">{feature}</span>
                        ))}
                    </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{vehicle.description}</p>
                
                <div className="card-actions justify-end">
                    <button className="btn btn-primary w-full" onClick={() => setSelectedVehicle(vehicle)}>Voir plus de détails</button>
                </div>
            </div>
        </div>
    );
}