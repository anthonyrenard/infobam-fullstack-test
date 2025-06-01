import { useState } from "react";


export const usePagination = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [totalPages, setTotalPages] = useState<number>(0);

    return { currentPage, pageSize, setCurrentPage, setPageSize, totalPages, setTotalPages };
}