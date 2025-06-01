"use client";

import { useState } from "react";
import Select from "../ui/Select";

interface VehicleSorterProps {
    sortBy: string;
    setSortBy: (sortBy: string) => void;
    sortByOptions: string[];
}

export default function VehicleSorter({ sortBy, setSortBy, sortByOptions }: VehicleSorterProps) {

    return (
        <div className="flex flex-row py-2 w-full justify-center md:justify-end">
            <Select
                label="Sort by"
                placeholder="-- Sort by --"
                options={sortByOptions}
                value={sortBy}
                onChange={(value) => setSortBy(value)}
            />

        </div>
    );
}