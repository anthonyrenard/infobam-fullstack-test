"use client";

import VehiculeCard from "./VehiculeCard";
import { Vehicle, VehiclePaginatedResponse } from "@/types/Vehicle";
import { useFetch } from "@/hooks/useFetch";
import { usePagination } from "@/hooks/usePagination";
import { useEffect, useState } from "react";
import Pagination from "../pagination/Pagination";

export default function VehiculeList() {
  const { data, isFetching, error, post } = useFetch<VehiclePaginatedResponse>("/api/vehicles");
  const { currentPage, goToNextPage, goToPrevPage, goToPage, setTotalPages } = usePagination({
    currentPage: 1,
    totalPages: 0,
  });

  useEffect(() => {
    post({
      page: currentPage,
    });
    setTotalPages(data?.totalPages || 0);
    console.log(currentPage);
  }, [currentPage]);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
        {data?.data.map((vehicle: Vehicle) => (
          <div key={vehicle.id} className="w-full h-full flex justify-center items-center">
            <VehiculeCard vehicle={vehicle} />
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={data?.totalPages || 0}
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage} 
        goToPage={goToPage}
        />
    </div>
  );
}