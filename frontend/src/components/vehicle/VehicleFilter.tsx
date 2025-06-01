"use client";

import Loader from "../ui/Loader";
import Select from "../ui/Select";
import { VehicleFilterData } from "@/types/Vehicle";

interface VehicleFilterProps {
    manufacturerOptions: string[];
    typeOptions: string[];
    yearOptions: string[];
    isFetching: boolean;
    filter: VehicleFilterData;
    setFilter: (filter: VehicleFilterData) => void;
}

export default function VehicleFilter({ manufacturerOptions = [], typeOptions = [], yearOptions = [], isFetching, filter, setFilter }: VehicleFilterProps) {

    if (isFetching) {
        return <Loader text="Loading filter data..." />;
    }   

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-2">
            <div className="col-span-1 flex justify-center items-center">
                <Select label="Manufacturer" placeholder="-- All manufacturers --" options={manufacturerOptions} value={filter.manufacturer} onChange={(value) => setFilter({ ...filter, manufacturer: value })} />
            </div>
            <div className="col-span-1 flex justify-center items-center">
                <Select label="Type" placeholder="-- All types --" options={typeOptions} value={filter.type} onChange={(value) => setFilter({ ...filter, type: value })} />
            </div>
            <div className="col-span-1 flex justify-center items-center">
                <Select label="Year" placeholder="-- All years --" options={yearOptions} value={filter.year} onChange={(value) => setFilter({ ...filter, year: value })} />
            </div>
        </div>
    );
}