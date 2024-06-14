import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ArticleDetail from './Components/ArticleDetail.jsx'
import Home from './Components/Home.jsx'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>}>
    <Route path='/' element = {<Home/>}/>
    <Route path='details' element = {<ArticleDetail/>}/>

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={route}/>
  </React.StrictMode>,
)
