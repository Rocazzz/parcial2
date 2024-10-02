import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
    <nav className="nav-wrapper">
      <div className="nav-content">
        <h1 className='logo'>My Portfolio</h1>
        <ul>
          <li>
            <a className="menu-item">Home</a>
          </li>
          <li>
            <a className="menu-item">Skills</a>
          </li>
          <li>
            <a className="menu-item">Proyects</a>
          </li>
          <li>
            <a className="menu-item">Contact Me</a>
          </li>

          <button className="contact-btn" onClick={() => {}}>
            Hire Me
          </button>
        </ul>
      </div>

    </nav>
      
      </>
  )
}

export default Navbar