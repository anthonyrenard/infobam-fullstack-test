'use client';

import React, { useState, useEffect } from 'react';

import { Vehicle } from '../../types/vehicle.type';
import Filters from '@/components/vehicles/Filters';
import VehiclesListWithPagination from '@/components/vehicles/List';


const VehiclesList: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(12);
  const [manufacturer, setManufacturer] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [year, setYear] = useState<number | string>('');
  const [sortField, setSortField] = useState<string>('price');
  const [sortOrder, setSortOrder] = useState<string>('ASC');

  const fetchVehicles = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles?page=${page}&limit=${limit}&manufacturer=${manufacturer}&type=${type}&year=${year}&sortField=${sortField}&sortOrder=${sortOrder}`);
      const data = await response.json();
      setVehicles(data.data);
      setTotal(data.total);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, [page, manufacturer, type, year, sortField, sortOrder]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSortChange = (field: string) => {
    setSortField(field);
    setSortOrder((prevOrder) => (prevOrder === 'ASC' ? 'DESC' : 'ASC'));
  };

  return (
    <div className="container mx-auto p-4">
      {/* Filters Section */}
      <Filters
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
        type={type}
        setType={setType}
        year={year}
        setYear={setYear}
        handleSortChange={handleSortChange}
        sortField={sortField}
        sortOrder={sortOrder}
       />

      {/* Vehicle List with Pagination */}
      <VehiclesListWithPagination
        vehicles={vehicles}
        total={total}
        page={page}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default VehiclesList;
