import React from 'react'
// components
import {Header,Footer} from "./components/All"

// pages
import Home from "./pages/Home"
import RoomDetails from "./pages/RoomDetails"

import {createBrowserRouter,RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    // this is a dynamic variable
    path:"/room/:id",
    element: <RoomDetails/>
  }
])
export default function App() {
  // we did this because the header and footer not gonna change
  return (
    <>
    <Header/>
    <RouterProvider router={router}/>
    <Footer/>
    </>
  )
}
