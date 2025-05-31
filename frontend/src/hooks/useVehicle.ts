import { useEffect, useState } from "react";
import { Vehicle } from "@/types/Vehicle";

export const useVehicle = () => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const vehicles = await fetch("/api/vehicles").then((res) => res.json());
                setVehicles(vehicles);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                throw error;
            }
            finally {
                setIsLoading(false);
            }
        };
        fetchVehicles();
    }, []);

    return { vehicles,
        currentPage,
        totalPages,
        pageSize,
        isLoading,
        setCurrentPage,
        setPageSize,
    };
}