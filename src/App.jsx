import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'
import Contact from './components/Contact'
import Services from './components/Services'
import Blog from './components/Blog'
import './App.css'

const App = () => {

const myRoute = createBrowserRouter(createRoutesFromElements(
  <Route >
    <Route path='/' element={<LayoutOne />}>
    <Route index element={<Home />} />
    <Route path='/Contact' element={<Contact />} />
    <Route path='/Services' element={<Services />} />
    <Route path='/Blog' element={<Blog />} />
 

    </Route>
  </Route>
))


  return (
    <>
    
    <RouterProvider router={myRoute} />
    
    
    </>
  )
}

export default App