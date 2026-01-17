import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./DealsSlider.css"

import { Pagination} from "swiper/modules";

const DealsSlider = ({photos}) => {
    return (
        <section className="deals-slider-container">
            <Swiper
                    slidesPerView = 'auto'
                    spaceBetween={10}
                    autoplay={false}
                    slideToClickedSlide={true}
                    centeredSlides={true}
                    pagination={{
                      clickable: true,
                    }}
                    watchSlidesProgress={true}
                    modules={[Pagination]}
                    className="mySwiper"
            >
                {photos.map((photo, index) => (
                    <SwiperSlide key={index} className="deal-slide">
                        <img className="img-deals" src={photo.url} alt={photo.alt}/>
                    </SwiperSlide>
                ))}
            </Swiper> 
        </section>
    )
}

export default DealsSlider