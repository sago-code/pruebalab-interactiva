import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/Home.css';
import viajesGrupales from '../Images/viajes_grupales.png';
import viajesALaMedida from '../Images/viajes_a_la_medida.png';
import destinosParaParejas from '../Images/destinos_para_parejas.png';
import nosotros1 from '../Images/nosotros_1.png';
import nosotros2 from '../Images/nosotros_2.png';
import nosotros3 from '../Images/nosotros_3.png';
import nosotros4 from '../Images/nosotros_4.png';

export default function Home() {
    const location = useLocation();
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const images = [
        { src: nosotros1, alt: "Instagram 1" },
        { src: nosotros2, alt: "Instagram 2" },
        { src: nosotros3, alt: "Instagram 3" },
        { src: nosotros4, alt: "Instagram 4" }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        if (location.hash === '#nosotros') {
            const element = document.getElementById('nosotros');
            element?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    return (
        //Pagina principal
        <div className="home-container">
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span>THE TRAVEL</span>
                        <span className="experience">EXPERIENCE</span>
                    </h1>
                    
                    <div className="travel-cards">
                        <div className="travel-link-container">
                            <img src={viajesGrupales} alt="Viajes grupales" />
                            <div className="link-content">
                                <h3>Viajes grupales</h3>
                                <div className="arrow-circle">
                                    <Link to="/viajes-grupales">→</Link>
                                </div>
                            </div>
                        </div>

                        <div className="travel-link-container">
                            <img src={viajesALaMedida} alt="Viajes a la medida" />
                            <div className="link-content">
                                <h3>Viajes a la medida</h3>
                                <div className="arrow-circle">
                                    <Link to="/viajes-medida">→</Link>
                                </div>
                            </div>
                        </div>

                        <div className="travel-link-container">
                            <img src={destinosParaParejas} alt="Destinos para parejas" />
                            <div className="link-content">
                                <h3>Destinos para parejas</h3>
                                <div className="arrow-circle">
                                    <Link to="/destinos-parejas">→</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Sobre nosotros*/}
            <section id="nosotros" className="nosotros-section">
                <h2 className="nosotros-title">NOSOTROS</h2>
                <p className="nosotros-text">
                    Un copy cercano como hablandole a un amigo. Lorem ipsum dolor sit amet, consectetuer 
                    adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation 
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum 
                    iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu 
                    feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent 
                    luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                </p>

                <div className="instagram-section">
                    <div className="instagram-gallery">
                        <div className="gallery-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                            {images.map((image, index) => (
                                <img 
                                    key={index} 
                                    src={image.src} 
                                    alt={image.alt}
                                    className="gallery-image"
                                />
                            ))}
                        </div>
                        <button className="nav-button prev" onClick={prevSlide}>‹</button>
                        <button className="nav-button next" onClick={nextSlide}>›</button>
                    </div>
                    <a 
                        href="https://instagram.com/churroceballos" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="instagram-handle"
                    >
                        @churroceballos
                    </a>
                </div>
            </section>
        </div>
    );
}
