import { NextResponse } from "next/server";
import { vehicleService } from "@/services/vehicleService";

export async function GET() {
    const manufacturersOptions = await vehicleService.getVehicleManufacturers();
    const typesOptions = await vehicleService.getVehicleTypes();
    const yearsOptions = await vehicleService.getVehicleYears();
    return NextResponse.json({ manufacturersOptions, typesOptions, yearsOptions });
}