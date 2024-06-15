import React from 'react';

const Pagination = ({ currentPage, paginate, totalItems, itemsPerPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = () => {
    if (pageNumbers.length <= 4) {
      return pageNumbers.map((number) => (
        <button
          key={number}
          className={`text-[#667085] font-bold py-2 px-4 rounded-md ${
            currentPage === number ? 'bg-gray-100 text-[#7E3AF2]' : 'hover:bg-gray-50'
          }`}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ));
    } else {
      const buttons = [];
      buttons.push(
        <button
          key={1}
          className={`text-[#667085] font-bold py-2 px-4 rounded-md ${
            currentPage === 1 ? 'bg-gray-100 text-[#7E3AF2]' : 'hover:bg-gray-50'
          }`}
          onClick={() => paginate(1)}
        >
          1
        </button>
      );

      if (currentPage > 3) {
        buttons.push(<span key="start-ellipsis" className="py-2 px-4">...</span>);
      }

      if (currentPage > 2 && currentPage < pageNumbers.length - 1) {
        buttons.push(
          <button
            key={currentPage - 1}
            className="text-[#667085] font-bold py-2 px-4 rounded-md hover:bg-gray-50"
            onClick={() => paginate(currentPage - 1)}
          >
            {currentPage - 1}
          </button>
        );
      }

      if (currentPage !== 1 && currentPage !== pageNumbers.length) {
        buttons.push(
          <button
            key={currentPage}
            className="text-[#667085] font-bold py-2 px-4 rounded-md bg-gray-100 text-[#7E3AF2]"
            onClick={() => paginate(currentPage)}
          >
            {currentPage}
          </button>
        );
      }

      if (currentPage < pageNumbers.length - 1 && currentPage > 1) {
        buttons.push(
          <button
            key={currentPage + 1}
            className="text-[#667085] font-bold py-2 px-4 rounded-md hover:bg-gray-50"
            onClick={() => paginate(currentPage + 1)}
          >
            {currentPage + 1}
          </button>
        );
      }

      if (currentPage < pageNumbers.length - 2) {
        buttons.push(<span key="end-ellipsis" className="py-2 px-4">...</span>);
      }

      buttons.push(
        <button
          key={pageNumbers.length}
          className={`text-[#667085] font-bold py-2 px-4 rounded-md ${
            currentPage === pageNumbers.length ? 'bg-gray-100 text-[#7E3AF2]' : 'hover:bg-gray-50'
          }`}
          onClick={() => paginate(pageNumbers.length)}
        >
          {pageNumbers.length}
        </button>
      );

      return buttons;
    }
  };

  return (
    <div className="flex justify-between mt-4">
      <button
        className={`text-[#667085] font-bold py-2 px-4 rounded-md ${
          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'
        }`}
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &larr; Previous
      </button>
      <div className="flex">
        {renderPageNumbers()}
      </div>
      <button
        className={`text-[#667085] font-bold py-2 px-4 rounded-md ${
          currentPage === pageNumbers.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'
        }`}
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === pageNumbers.length}
      >
        Next &rarr;
      </button>
    </div>
  );
};

export default Pagination;
