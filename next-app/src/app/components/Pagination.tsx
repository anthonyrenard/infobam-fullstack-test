interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
  }: PaginationProps) => {
    const handlePrevious = () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    };
  
    const handleNext = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    };
  
    // Calcul des pages visibles
    const getVisiblePages = () => {
      const pages = [];
  
      if (currentPage === 1) {
        pages.push(1, 2, 3);
      } else if (currentPage === totalPages) {
        pages.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      }
  
      return pages.filter((page) => page >= 1 && page <= totalPages);
    };
  
    const visiblePages = getVisiblePages();
  
    return (
      <div className="flex items-center justify-center mt-4 space-x-2">
        {/* Flèche gauche native */}
        <button
          onClick={handlePrevious}
          className={`btn btn-sm ${
            currentPage === 1 ? 'btn-disabled' : ''
          }`}
        >
          «
        </button>
  
        {/* Pages visibles */}
        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`btn btn-sm ${
              page === currentPage ? 'btn-active' : ''
            }`}
          >
            {page}
          </button>
        ))}
  
        {/* Flèche droite native */}
        <button
          onClick={handleNext}
          className={`btn btn-sm ${
            currentPage === totalPages ? 'btn-disabled' : ''
          }`}
        >
          »
        </button>
      </div>
    );
  };
  
  export default Pagination;
  