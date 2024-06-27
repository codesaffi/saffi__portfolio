import React from "react"
import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Sidebar from "./pages/Sidebar";


function App() {

  return (
    <>

     <Navbar />

      <Outlet />


      
    
    </>
  )
}

export default App
