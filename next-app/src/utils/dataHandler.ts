// src/utils/dataHandler.ts

import vehicles from '../../data/vehicles';
import { Vehicle } from '../models/vehicle';

/**
 * Récupère tous les véhicules.
 */
export const getAllVehicles = (): Vehicle[] => {
  return vehicles;
};

/**
 * Récupère un véhicule par son ID.
 * @param id - L'ID du véhicule.
 */
export const getVehicleById = (id: string): Vehicle | undefined => {
  return vehicles.find(vehicle => vehicle.id === id);
};

/**
 * Récupère une liste unique de fabricants.
 */
export const getAllManufacturers = (): string[] => {
  const manufacturers = vehicles.map(vehicle => vehicle.manufacturer);
  return Array.from(new Set(manufacturers)).sort();
};
