import { vehicleService } from "@/services/vehicleService";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const VehiclePaginationSchema = z.object({
  page: z.number().min(1),
  pageSize: z.number().min(1),
});

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const { page, pageSize } = VehiclePaginationSchema.parse({
    page: searchParams.get("page"),
    pageSize: searchParams.get("pageSize"),
  });

  const vehicles = await vehicleService.getPaginatedVehicles(page, pageSize);
  const totalVehicles = await vehicleService.getTotalVehicles();
  const totalPages = Math.ceil(totalVehicles / pageSize);

  const response = {
    vehicles,
    totalPages,
  };

  return NextResponse.json(response);
}
