import {Swiper,  SwiperSlide} from 'swiper/react';
import {Keyboard, Navigation, Pagination} from 'swiper/modules';
import {teachers} from "../../constants/teachersList";
import React from "react";

const TeachersSwiper:React.FC = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Keyboard]}
            navigation={{ nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",}}
            keyboard={{enabled: true}}
            pagination={{ clickable: true }}
            loop={true}
            style={{ marginTop: 80}}
            breakpoints={{
                600: {
                    slidesPerView: 1,
                },
                800: {
                    slidesPerView: 2,
                },
                1101: {
                    slidesPerView: 3,
                }
            }}

        >
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            {teachers.map((teacherContent, index) => (
                <SwiperSlide key={index} style={{  flexFlow: "column", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className="teacher_image_div">
                        <img className="teacher_image" src={teacherContent.photo} alt={teacherContent.name}/>
                    </div>
                    <div className="info_about_teacher">
                        <div className="teacher_name">
                            {teacherContent.name}
                        </div>
                        <div className="teacher_special">
                            {teacherContent.special}
                        </div>
                        <div className="teacher_description">
                            {teacherContent.description}
                        </div>
                    </div>

                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default TeachersSwiper;