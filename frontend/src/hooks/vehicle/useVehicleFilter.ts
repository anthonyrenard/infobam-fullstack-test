import { VehicleFilterOptions, VehicleFilterData } from "@/types/Vehicle";
import { useEffect, useState } from "react";
import { useFetch } from "../useFetch";

export default function useVehicleFilter() {
    const { data, isFetching, error, get } = useFetch<VehicleFilterOptions>("/api/vehicles/filter");
    const [filterData, setFilterData] = useState<VehicleFilterData>({
        manufacturer: "",
        type: "",
        year: "",
    });
    const [filterOptions, setFilterOptions] = useState<VehicleFilterOptions>({
        manufacturersOptions: [],
        typesOptions: [],
        yearsOptions: [],
    });

    useEffect(() => {
        get()
        .then((data) => {
            if (data) {
                setFilterOptions(data);
            }
        });
    }, []);

    return {    
        filterData,
        filterOptions,
        isFetching,
        setFilterData,
    };
}