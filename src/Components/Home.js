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
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import { LOOP } from '@splidejs/splide';

export default function Home() {
    const location = useLocation();
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const images = [
        { src: nosotros1, alt: "Instagram 1" },
        { src: nosotros2, alt: "Instagram 2" },
        { src: nosotros3, alt: "Instagram 3" },
        { src: nosotros4, alt: "Instagram 4" },
        { src: nosotros1, alt: "Instagram 1" },
        { src: nosotros2, alt: "Instagram 2" },
        { src: nosotros3, alt: "Instagram 3" },
        { src: nosotros4, alt: "Instagram 4" }
    ];
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
                    <div className="instagra-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                        </svg>
                    </div>
                    <Splide hasTrack={ false } >
                        <div className="custom-wrapper">
                            <SplideTrack>
                                {images.map((image, index) => (
                                    <SplideSlide>
                                        <div class="sliderCustom">
                                            <img 
                                                key={index} 
                                                src={image.src} 
                                                alt={image.alt}
                                                className="images"
                                            />
                                            <a 
                                                href="https://instagram.com/churroceballos" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="instagram-handle"
                                            >
                                                @churroceballos
                                            </a>
                                        </div>
                                    </SplideSlide>
                                ))}
                            </SplideTrack>

                            <div className="splide__arrows">
                                <button className="splide__arrow splide__arrow--prev">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                                    </svg>
                                </button>
                                <button className="splide__arrow splide__arrow--next">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </Splide>
                </div>
            </section>
        </div>
    );
}
