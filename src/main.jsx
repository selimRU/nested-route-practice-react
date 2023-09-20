import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Shared/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Profile from './components/Dashboard/Profile.jsx'
import EditProfile from './components/Dashboard/EditProfile.jsx'
import DashbosrdLayout from './components/Dashboard/DashbosrdLayout.jsx'
import MoreProducts from './components/MoreProducts/MoreProducts.jsx'
import Details from './components/Details/Details.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar></Navbar>,
    children: [
      {
        path: '/',
        loader: () => fetch(`https://dummyjson.com/products`),
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/moreProducts',
        element: <MoreProducts></MoreProducts>
      },
      {
        path: '/details/:id',
        loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.id}`),
        element: <Details></Details>
      },
      {
        path: '/dashboardLayout',
        element: <DashbosrdLayout></DashbosrdLayout>,
        children: [
          {
            path: '/dashboardLayout/profile',
            element: <Profile></Profile>
          },
          {
            path: '/dashboardLayout/editProfile',
            element: <EditProfile></EditProfile>
          },
        ]
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
