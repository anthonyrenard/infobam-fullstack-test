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
        <div className="flex flex-row gap-2">
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