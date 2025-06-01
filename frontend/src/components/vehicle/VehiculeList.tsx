"use client";

import VehiculeCard from "./VehiculeCard";
import { Vehicle, VehiclePaginatedResponse, VehicleFilterData } from "@/types/Vehicle";
import { useFetch } from "@/hooks/useFetch";
import { usePagination } from "@/hooks/usePagination";
import { useEffect, useState } from "react";
import Pagination from "../pagination/Pagination";
import VehicleFilter from "./VehicleFilter";
import useVehicleFilter from "@/hooks/vehicle/useVehicleFilter";
import { FaInbox } from "react-icons/fa";

export default function VehiculeList() {
  const { data, isFetching, error, post } = useFetch<VehiclePaginatedResponse>("/api/vehicles");
  const { currentPage, goToNextPage, goToPrevPage, goToPage, setTotalPages } = usePagination({
    currentPage: 1,
    totalPages: 0,
  });

  const { filterOptions, filterData, setFilterData, isFetching: isFilterFetching } = useVehicleFilter();

  useEffect(() => {
    post({
      page: currentPage,
      filterData: filterData,
    });
    setTotalPages(data?.totalPages || 0);
  }, [currentPage, filterData]);


  return (
    <div className="flex flex-col gap-4">
      <VehicleFilter
        manufacturerOptions={filterOptions.manufacturersOptions}
        typeOptions={filterOptions.typesOptions}
        yearOptions={filterOptions.yearsOptions}
        isFetching={isFilterFetching || isFetching}
        filter={filterData}
        setFilter={(filter: VehicleFilterData) => setFilterData(filter)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
        {data?.data.map((vehicle: Vehicle) => (
          <div key={vehicle.id} className="w-full h-full flex justify-center items-center">
            <VehiculeCard vehicle={vehicle} />
          </div>
        ))}
        {data?.data.length === 0 && (
          <div className="w-full h-full flex flex-col justify-center items-center">
            <FaInbox className="text-slate-300 text-4xl" />
            <p className="text-center text-gray-500">No vehicles found</p>
            <p className="text-center text-gray-500">Please try again with different filters</p>
          </div>
        )}
      </div>
      {!!data?.data.length && data?.data.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={data?.totalPages || 0}
          goToNextPage={goToNextPage}
          goToPrevPage={goToPrevPage}
          goToPage={goToPage}
        />
      )}
    </div>
  );
}