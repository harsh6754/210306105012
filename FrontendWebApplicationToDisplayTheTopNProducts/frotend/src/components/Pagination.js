import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => handlePageChange(i + 1)}
          className={`px-4 py-2 border ${currentPage === i + 1 ? 'bg-blue-500 text-white' : ''}`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
