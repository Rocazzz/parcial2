import React from 'react'
import "./MobileNav.css";

const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <>
        <div
            className={`mobile-menu ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
        >
            <div className="mobile-menu-container">
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
                    <button className="contact-btn">
                        <a href="src\assets\images\Hoja De Vida Juan Camilo Castro.pdf" download="HojaDeVida.pdf" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Hire Me
                        </a>
                    </button>
                    </ul>

            </div>
        </div>
    </>
  )
}

export default MobileNav