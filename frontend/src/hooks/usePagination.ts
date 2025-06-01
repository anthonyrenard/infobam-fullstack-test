import { useState } from "react";

export const usePagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(0);

    return { currentPage, pageSize, setCurrentPage, setPageSize, totalPages, setTotalPages };
}