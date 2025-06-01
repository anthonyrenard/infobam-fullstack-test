import { Vehicle, VehicleFilterData } from "@/types/Vehicle";
import { vehicleList } from "@/data/vehicleList";
import { vehicleManufacturerOptions } from "@/data/vehicleManufacturerOptions";
import { vehicleTypeOptions } from "@/data/vehicleTypeOptions";
import { vehicleYearOptions } from "@/data/vehicleYearOptions";


class VehicleService {
  private vehicles: Vehicle[] = vehicleList;

  async getVehicles() {
    return this.vehicles;
  }

  async getPaginatedVehicles(vehicles : Vehicle[], page: number, pageSize: number) {
    return vehicles.slice((page - 1) * pageSize, page * pageSize);
  }

  async getVehicleById(id: string) {
    return this.vehicles.find((vehicle) => vehicle.id === id);
  }

  async getTotalVehicles() {
    return this.vehicles.length;
  }

  async getFilteredVehicles(filterData: VehicleFilterData) {
    return this.vehicles.filter((vehicle) => {
      if(filterData.manufacturer.length > 0 && !filterData.manufacturer.includes(vehicle.manufacturer)) {
        return false;
      }
      if(filterData.type.length > 0 && !filterData.type.includes(vehicle.type)) {
        return false;
      }
      if(filterData.year.length > 0 && !filterData.year.includes(vehicle.year.toString())) {
        return false;
      }
      return true;
    });
  }

  async getVehicleManufacturers() {
    return vehicleManufacturerOptions;
  }

  async getVehicleTypes() {
    return vehicleTypeOptions;
  }

  async getVehicleYears() {
    return vehicleYearOptions;
  }
}

export const vehicleService = new VehicleService();