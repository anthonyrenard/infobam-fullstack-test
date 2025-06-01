import { vehicleService } from "@/services/vehicleService";
import { VehicleResponse } from "@/types/Vehicle";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const VehiclePaginationSchema = z.object({
  page: z.number().min(1),
  filterData: z.object({
    manufacturer: z.string(),
    type: z.string(),
    year: z.string(),
  }),
});

export async function POST(request: NextRequest): Promise<NextResponse<VehicleResponse>> {

  //Validate the request body
  const { page, filterData } = VehiclePaginationSchema.parse(await request.json());
  
  const pageSize = 3;

  const vehicles = await vehicleService.getFilteredVehicles(filterData);
  const totalVehicles = vehicles.length;
  const paginatedVehicles = await vehicleService.getPaginatedVehicles(vehicles, page, pageSize);
 
  const totalPages = Math.ceil(totalVehicles / pageSize);

  const response = {
    data: paginatedVehicles,
    totalPages,
  };

  console.log(response);

  return NextResponse.json(response);

}
