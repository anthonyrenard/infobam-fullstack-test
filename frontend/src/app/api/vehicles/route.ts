import { vehicleService } from "@/services/vehicleService";
import { NextResponse } from "next/server";

export async function GET() {
  const vehicles = await vehicleService.getVehicles();
  return NextResponse.json(vehicles);
}
