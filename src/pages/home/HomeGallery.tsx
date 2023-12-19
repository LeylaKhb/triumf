import {homePhoto} from "../../constants/homeMaterials";
import {Swiper,  SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import {Link} from "react-router-dom";
import React from "react";

interface HomeGalleryProps {
}
const HomeGallery:React.FC<HomeGalleryProps> = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{ nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",}}
            pagination={{ clickable: true }}
            loop={true}
            style={{marginLeft: 0, width: '100vw', display: 'flex', justifyContent: "center", alignItems: 'center', marginBottom: 90}}
            slidesPerView={1}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}

        >
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            {homePhoto.map((homePhotoContent, index) => (
                <SwiperSlide key={index} style={{  flexFlow: "column", display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100%'}}>

                    <img className="home_gallery_img_div" src={homePhotoContent.image} alt={homePhotoContent.title} />
                    <div className="home_gallery_title" >
                        {homePhotoContent.title}
                    </div>
                    <div className="home_gallery_link">
                        <Link to={homePhotoContent.link} style={{ color: "white"}}>
                            Подробнее →
                        </Link>
                    </div>

                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default HomeGallery;