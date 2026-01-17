// LogoSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './logoSlider.css';

const LogoSlider = ({ logos }) => {
    // Datos de ejemplo si no se pasan logos
    const defaultLogos = [
        { url: 'https://via.placeholder.com/150x60/4A90E2/ffffff?text=Logo+1', alt: 'Logo 1' },
        { url: 'https://via.placeholder.com/150x60/E94B3C/ffffff?text=Logo+2', alt: 'Logo 2' },
        { url: 'https://via.placeholder.com/150x60/50C878/ffffff?text=Logo+3', alt: 'Logo 3' },
        { url: 'https://via.placeholder.com/150x60/F4A460/ffffff?text=Logo+4', alt: 'Logo 4' },
        { url: 'https://via.placeholder.com/150x60/9B59B6/ffffff?text=Logo+5', alt: 'Logo 5' },
        { url: 'https://via.placeholder.com/150x60/E67E22/ffffff?text=Logo+6', alt: 'Logo 6' },
    ];

    const logosToUse = logos || defaultLogos;
    const logosExtended = [...logosToUse, ...logosToUse, ...logosToUse];

    return (
        <div className="logo-slider-container">
            <Swiper
                modules={[Autoplay]}
                freeMode={true}
                loop={true}
                slidesPerView={2}
                spaceBetween={30}
                speed={4000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 50
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 60
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 70
                    },
                    1280: {
                        slidesPerView: 6,
                        spaceBetween: 80
                    }
                }}
                className="logo-swiper"
            >
                {logosExtended.map((logo, index) => (
                    <SwiperSlide key={index} className='logo-slide'>
                        <img src={logo.url} alt={logo.alt} className='logo-img' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default LogoSlider;