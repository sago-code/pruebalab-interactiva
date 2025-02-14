import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Menu.css';
import logo from '../Images/logo.png';

export default function Menu() {
    const handleNosotrosClick = () => {
        const nosotrosSection = document.querySelector('.nosotros-section');
        
        if (nosotrosSection) {
            const sectionTop = nosotrosSection.offsetTop;
            
            window.scrollTo({
                top: sectionTop - 80,
                behavior: 'smooth'
            });
        }
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <nav className="menu-container">
            <div className="logo">
                <img src={logo} alt="All In Travels Logo" />
            </div>
            <ul className="menu-items">
                <li>
                    <Link 
                        to="/" 
                        onClick={handleHomeClick}
                    >
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/" 
                        onClick={(e) => {
                            e.preventDefault();
                            handleNosotrosClick();
                        }}
                    >
                        Nosotros
                    </Link>
                </li>
                <li><Link to="/viajes">Viajes</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    );
}
