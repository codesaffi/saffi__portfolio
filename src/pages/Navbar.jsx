import React from 'react'

import { NavLink } from 'react-router-dom'

const Navbar = () => {


  return (
    
    <nav className="navbar">
      

    <ul className="navbar-list">

      <li className="navbar-item">
      <NavLink to="/saffi__portfolio/" className={(e) => {return e.isActive? "navbar-link active": "navbar-link"}} >About</NavLink>
      </li>

      <li className="navbar-item">
      <NavLink to="/saffi__portfolio/Resume" className="navbar-link" >Resume</NavLink>
      </li>

      <li className="navbar-item">
      <NavLink to="/saffi__portfolio/Portfolio" className="navbar-link" >Portfolio</NavLink>
      </li>

      <li className="navbar-item">
      <NavLink to="/saffi__portfolio/Blog" className="navbar-link" >Blog</NavLink>
      </li>

      <li className="navbar-item">
        <NavLink to="/saffi__portfolio/Contact" className="navbar-link" >Contact</NavLink>
      </li>

    </ul>

  </nav>
  )
}

export default Navbar