import { Vehicle } from "@/types/Vehicle";
import { vehicleList } from "@/data/vehicleList";
import { vehicleManufacturerList } from "@/data/vehicleManufacturerList";
import { vehicleTypeList } from "@/data/vehicleTypeList";
import { vehicleYearList } from "@/data/vehicleYearList";


class VehicleService {
  private vehicles: Vehicle[] = vehicleList;

  async getVehicles() {
    return this.vehicles;
  }

  async getPaginatedVehicles(page: number, pageSize: number) {
    return this.vehicles.slice((page - 1) * pageSize, page * pageSize);
  }

  async getVehicleById(id: string) {
    return this.vehicles.find((vehicle) => vehicle.id === id);
  }

  async getTotalVehicles() {
    return this.vehicles.length;
  }

  async getVehicleManufacturers() {
    return vehicleManufacturerList;
  }

  async getVehicleTypes() {
    return vehicleTypeList;
  }

  async getVehicleYears() {
    return vehicleYearList;
  }
}

export const vehicleService = new VehicleService();