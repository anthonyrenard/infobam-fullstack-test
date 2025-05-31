import { Vehicle } from "@/types/Vehicle";
import { vehicleList } from "@/data/vehicleList";


class VehicleService {
  private vehicles: Vehicle[] = vehicleList;

  async getVehicles() {
    return this.vehicles;
  }

  async getVehicleById(id: string) {
    return this.vehicles.find((vehicle) => vehicle.id === id);
  }
}

export const vehicleService = new VehicleService();