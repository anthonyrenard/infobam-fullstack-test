import { vehicleService } from "@/services/vehicleService";
import { VehiclePaginatedResponse } from "@/types/Vehicle";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const VehiclePaginationSchema = z.object({
  page: z.number().min(1),
});

export async function POST(request: NextRequest): Promise<NextResponse<VehiclePaginatedResponse>> {

  const { page } = VehiclePaginationSchema.parse(await request.json());
  const pageSize = 3;
  const vehicles = await vehicleService.getPaginatedVehicles(page, pageSize);
  const totalVehicles = await vehicleService.getTotalVehicles();
  const totalPages = Math.ceil(totalVehicles / pageSize);

  const response = {
    data: vehicles,
    totalVehicles,
    totalPages,
  };

  console.log(response);

  return NextResponse.json(response);

}
