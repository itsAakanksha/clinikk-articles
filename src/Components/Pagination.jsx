import React, { useState } from 'react';

const Pagination = () => {
  // Array of 50 items to paginate (for demo purposes)
  const totalItems = Array.from({ length: 50 }, (_, index) => index + 1);
  const itemsPerPage = 10; // Number of items per page

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = totalItems.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Generate pagination buttons
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mx-auto mt-8">
{
    //   <div className="grid grid-cols-2 gap-4">
    //     {currentItems.map((item) => (
    //       <div key={item} className="border p-4 rounded shadow">
    //         <p>Card {item}</p>
    //       </div>
    //     ))}
    //   </div>
      }
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
        <div>
          {pageNumbers.map((number) => (
            <button
              key={number}
              className={` text-[#667085] font-bold py-2 px-4 rounded-md ${
                currentPage === number ? 'bg-gray-100 text-[#7E3AF2]' : 'hover:bg-gray-50'
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          ))}
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
    </div>
  );
};

export default Pagination;

