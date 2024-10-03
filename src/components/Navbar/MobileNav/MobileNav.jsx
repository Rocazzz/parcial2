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
                        <a className="menu-item" href="#hero">Home</a>
                    </li>
                    <li>
                        <a className="menu-item" href="#skills">Skills</a>
                    </li>
                    <li>
                        <a className="menu-item" href="#projects">Projects</a>
                    </li>
                    <li>
                        <a className="menu-item" href="#contact">Contact Me</a>
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