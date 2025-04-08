import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Tarif from './pages/Tarif'
import Contact from './pages/Contact'
import Vakansiya from './pages/Vakansiya'
const App = () => {
  const route=createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/tarif',
          element:<Tarif/>
        },
        {
          path:'/vakansiya',
          element:<Vakansiya/>
        },
        {
          path:'/contact',
          element:<Contact/>
        }
      ]
    }
  ])
  return <RouterProvider router={route}/>
}

export default App
