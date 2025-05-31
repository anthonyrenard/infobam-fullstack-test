import { Vehicle } from "@/types/Vehicle";

interface VehiculeCardProps {
    vehicle: Vehicle;
}

export default function VehiculeCard({ vehicle }: VehiculeCardProps) {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={vehicle.images[0]}
                    alt={vehicle.model} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{vehicle.model}</h2>
                <div className="flex justify-between">
                    <p>{vehicle.price} €</p>
                    <p>{vehicle.year}</p>
                    <p>{vehicle.fuelType}</p>
                    <p>{vehicle.transmission}</p>
                    <p>{vehicle.mileage} km</p>
                    <p>{vehicle.features.join(", ")}</p>
                </div>
                <p>{vehicle.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Voir plus</button>
                </div>
            </div>
        </div>
    );
}