import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { useParams } from 'react-router-dom'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ArticleDetail from './Components/ArticleDetail.jsx'
import {TreatmentData} from './TreatmentData.js'
import Home from './Components/Home.jsx'

// const [article] = TreatmentData;
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>}>
    <Route path='/' element = {<Home/>}/>
    <Route path='details/:id' element = {<ArticleDetail articles={TreatmentData}/>}/>

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={route}/>
  </React.StrictMode>,
)
