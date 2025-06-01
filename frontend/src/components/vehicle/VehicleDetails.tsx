"use client";

import { Vehicle } from "@/types/Vehicle";
import { useEffect, useState } from "react";
import {
    FaTruck,
    FaCalendarAlt,
    FaDollarSign,
    FaGasPump,
    FaCog,
    FaStar,
    FaImages
} from 'react-icons/fa';

interface VehicleDetailsProps {
    vehicle: Vehicle | null;
    resetSelectedVehicle: () => void;
}

export default function VehicleDetails({ vehicle, resetSelectedVehicle }: VehicleDetailsProps) {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const showModal = () => {
        const modal = document?.getElementById('my_modal_1') as any;
        if (modal) {
            modal.showModal();
        }
    }

    const closeModal = () => {
        const modal = document?.getElementById('my_modal_1') as any;
        if (modal) {
            modal.close();
            resetSelectedVehicle();
        }
    }

    useEffect(() => {
        if (vehicle) {
            showModal();
        } else {
            closeModal();
        }
    }, [vehicle]);

    return (

        <dialog id="my_modal_1" className="modal">
            <div className="modal-box max-w-3xl">
                {vehicle && (
                    <div className="flex flex-col gap-6">
                        {/* En-tête avec image principale */}
                        <div className="relative h-64 rounded-lg overflow-hidden">
                            <img
                                src={selectedImage ? vehicle.images[selectedImage] : vehicle.images[0]}
                                alt={`${vehicle.manufacturer} ${vehicle.model}`}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Titre et type */}
                        <div>
                            <h3 className="font-bold text-2xl mb-2">
                                {vehicle.manufacturer} {vehicle.model}
                            </h3>
                            <span className="badge badge-primary">{vehicle.type}</span>
                        </div>

                        {/* Grille d'informations principales */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt className="h-5 w-5 text-primary" />
                                <span>Année: {vehicle.year}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaDollarSign className="h-5 w-5 text-primary" />
                                <span>Prix: {vehicle.price.toLocaleString()} €</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaGasPump className="h-5 w-5 text-primary" />
                                <span>Carburant: {vehicle.fuelType}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCog className="h-5 w-5 text-primary" />
                                <span>Transmission: {vehicle.transmission}</span>
                            </div>
                            {vehicle.mileage && (
                                <div className="flex items-center gap-2">
                                    <FaTruck className="h-5 w-5 text-primary" />
                                    <span>Kilométrage: {vehicle.mileage.toLocaleString()} km</span>
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        <div>
                            <h4 className="font-semibold mb-2">Description</h4>
                            <p className="text-gray-600">{vehicle.description}</p>
                        </div>

                        {/* Caractéristiques */}
                        <div>
                            <h4 className="font-semibold mb-2">Features</h4>
                            <div className="flex flex-wrap gap-2">
                                {vehicle.features.map((feature, index) => (
                                    <span key={index} className="badge badge-outline">
                                        <FaStar className="h-4 w-4 mr-1" />
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Galerie d'images */}
                        {vehicle.images.length > 1 && (
                            <div>
                                <h4 className="font-semibold mb-2">Gallery</h4>
                                <div className="grid grid-cols-4 gap-2">
                                    {vehicle.images.map((image, index) => (
                                        <div key={index} className={`relative h-20 rounded-lg overflow-hidden cursor-pointer ${selectedImage === index ? "border-2 border-primary" : ""}`} onClick={() => setSelectedImage(index)}>
                                            <img
                                                src={image}
                                                alt={`${vehicle.manufacturer} ${vehicle.model} - Image ${index + 2}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-primary" onClick={closeModal}>Fermer</button>
                    </form>
                </div>
            </div>
        </dialog>

    );
}