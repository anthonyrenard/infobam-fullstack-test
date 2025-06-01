import { useEffect, useState } from "react";
import { useFetch } from "../useFetch";
import { VehicleSortByOptions } from "@/types/Vehicle";

export default function useVehicleSorter() {
    const [sortBy, setSortBy] = useState<string>("Price");
    const [sortByOptions, setSortByOptions] = useState<string[]>([]);
    const { get } = useFetch<VehicleSortByOptions>("/api/vehicles/sorter");

    useEffect(() => {
        get()
        .then((data) => {
            if (data) {
                setSortByOptions(data.sortByOptions);
            }
        });
    }, []);

    return { sortBy, setSortBy, sortByOptions };
}