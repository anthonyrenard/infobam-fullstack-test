import { useEffect, useState } from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

export const usePagination = ({currentPage, totalPages}: PaginationProps) => {
    const [currentPageState, setCurrentPage] = useState<number>(currentPage);
    const [totalPagesState, setTotalPages] = useState<number>(totalPages);

    useEffect(() => {
        setCurrentPage(currentPage);
        setTotalPages(totalPages);
    }, []);

    const goToNextPage = () => {
        console.log(currentPageState, totalPagesState);
        if (currentPageState < totalPagesState) {
            setCurrentPage(currentPageState + 1);
        }
    }

    const goToPrevPage = () => {
        if (currentPageState > 1) {
            setCurrentPage(currentPageState - 1);
        }
    }

    const goToPage = (page: number) => {
        setCurrentPage(page);
    }

    return { 
        currentPage: currentPageState,
        totalPages: totalPagesState,
        setCurrentPage,
        setTotalPages,
        goToNextPage,
        goToPrevPage,
        goToPage,
    };
}