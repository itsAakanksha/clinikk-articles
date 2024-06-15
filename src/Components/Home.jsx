import React, { useState } from 'react';
import Cards from './Cards';
import Pagination from './Pagination';
import cardData from '../cardData.js'; // Import the card data
import RecentArticles from './RecentArticles.jsx'

const Home = () => {
  const itemsPerPage = 10; // Number of items per page

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cardData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto mt-8">
       <RecentArticles/>
      <Cards currentItems={currentItems} />
      <Pagination
        currentPage={currentPage}
        paginate={paginate}
        totalItems={cardData.length}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default Home;
