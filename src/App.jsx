
import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header';
import Card from './Components/Card';
import RecentArticles from './Components/RecentArticles';
import Cards from './Components/Cards';
import ArticleDetail from './Components/ArticleDetail';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';
function App() {

  return(
    <>
  <Navbar/>
  <div className='md:p-20 md:mx-12'>
 
  <Outlet/>

  </div>
  <Footer/>
  

  
  </>
  );
  
}

export default App
