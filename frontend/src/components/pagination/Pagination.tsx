"use client";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    goToNextPage: () => void;
    goToPrevPage: () => void;
    goToPage: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, goToNextPage, goToPrevPage, goToPage }: PaginationProps) {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="join">
                <button className="join-item btn btn-outline" onClick={goToPrevPage} disabled={currentPage === 1}>Prev</button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <input
                        key={index}
                        className="join-item btn btn-outline border"
                        type="radio"
                        name="options"
                        aria-label={(index + 1).toString()}
                        checked={currentPage === index + 1}
                        onChange={() => goToPage(index + 1)} 
                        />
                ))}
                <button className="join-item btn btn-outline" onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    )
}