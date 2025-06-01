import { NextResponse } from "next/server";
import { vehicleService } from "@/services/vehicleService";

export async function GET() {
    const sortByOptions = await vehicleService.getVehicleSortByOptions();
    return NextResponse.json({ sortByOptions });
}