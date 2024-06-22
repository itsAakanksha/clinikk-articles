import React, { useState } from 'react';
import Cards from './Cards';
import Pagination from './Pagination';
import cardData from '../cardData.js'; // Import the card data
import RecentArticles from './RecentArticles.jsx'
import Header from './Header.jsx';
import call from '../../public/call.gif'
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
    <div className="container mx-auto ">
 <Header/>

  
{
      //  <RecentArticles/>
 }
      <Cards currentItems={currentItems} />
{
      // <Pagination
      //   currentPage={currentPage}
      //   paginate={paginate}
      //   totalItems={cardData.length}
      //   itemsPerPage={itemsPerPage}
      // />
      }
      <div className="fixed bottom-6 right-5 z-50 cursor-pointer">
      <img src={call} alt="Example GIF" className="w-12 h-12" />
    </div>
    </div>
  );
};

export default Home;
