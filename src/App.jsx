import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header';
import Card from './Components/Card';
import RecentArticles from './Components/RecentArticles';
import Cards from './Components/Cards';
import ArticleDetail from './Components/ArticleDetail';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
function App() {

  
    

  return(
    <>
    <Helmet>
        <title>Primary healthcare service provider in Bangalore - Clinikk Health Hub</title>
        <meta name="description" content='Primary healthcare service provider in bangalore like diabetes, dengue, cold, cough, fever, sore throat, joint pain, back pain , backache, headache and viral infections. Visit now' />
      </Helmet>
  <Navbar/>
  <div className='md:p-20 md:mx-12 pt-20 '>

  <Outlet/>
  
  </div>
  <Footer/>

  

  
  </>
  );
  
}

export default App


