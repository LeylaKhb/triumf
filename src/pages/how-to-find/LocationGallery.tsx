import {Swiper,  SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Keyboard} from 'swiper/modules';
import image1 from "../../static/location/image1.jpg";
import image2 from "../../static/location/image2.jpg";
import image3 from "../../static/location/image3.jpg";
import image4 from "../../static/location/image4.jpg";
import image5 from "../../static/location/image5.jpg";
import image6 from "../../static/location/image6.jpg";
import image7 from "../../static/location/image7.jpg";
import image8 from "../../static/location/image8.jpg";
import image9 from "../../static/location/image9.jpg";

import React from "react";

const LocationGallery:React.FC = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Keyboard]}
            navigation={{ nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",}}
            keyboard={{ enabled: true }}
            pagination={{ clickable: true}}
            loop={true}
            slidesPerView={1}
            className="swiper_how_to_fond"

        >
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>


            <SwiperSlide>
                <img className="location_image" src={image1} alt="image1" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="location_image" src={image2} alt="image2" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="location_image" src={image3} alt="image3" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="location_image" src={image4} alt="image4" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="location_image" src={image5} alt="image5" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="location_image" src={image6} alt="image6" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="location_image" src={image7} alt="image7" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="location_image" src={image8} alt="image8" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="location_image" src={image9} alt="image9" />
            </SwiperSlide>
        </Swiper>
    )
}

export default LocationGallery;