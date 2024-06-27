import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './pages/About.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './pages/Navbar.jsx'
import Resume from './pages/Resume.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Sidebar from './pages/Sidebar.jsx'

const router = createBrowserRouter([
  {
    path: "/saffi__portfolio/",
    element: <App />,
    children: [
      {
        path: "/saffi__portfolio/",
        element: <> <Navbar /> <About /> </> ,
      },
      {
        path: "/saffi__portfolio/Portfolio",
        element:<> <Navbar /> <Portfolio /> </>,
      },
      {
        path: "/saffi__portfolio/Blog",
        element: <> <Navbar /> <Blog /> </> ,
      },
      {
        path: "/saffi__portfolio/Contact",
        element: <> <Navbar /> <Contact /> </> ,
      },
      {
        path: "/saffi__portfolio/Resume",
        element:  <> <Navbar /> <Resume /> </> ,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main>
   <Sidebar />
  
   <div className="main-content">
   <RouterProvider router={router} />
   
   </div>
   </main>
  </React.StrictMode>,
)
