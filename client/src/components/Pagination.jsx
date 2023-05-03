import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  totalTransactions,
}) => {
  const handlePrevPageClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPageClick = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-between items-center mt-8">
      <div className="text-sm text-gray-700">
        Page {currentPage} of {totalPages}
      </div>
      <div className="text-md text-slate-500 font-medium">
        Showing results from {currentPage} to {totalPages} from a total of
        {totalTransactions}
        transactions
      </div>
      <div className="flex items-center">
        <button
          className={`border border-gray-300 rounded py-1 px-2  ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrevPageClick}
          disabled={currentPage === 1}
        >
          <HiChevronLeft className="w-4 h-4" />
        </button>
        <button
          className={`border border-gray-300 rounded py-1 px-2  ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleNextPageClick}
          disabled={currentPage === totalPages}
        >
          <HiChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
