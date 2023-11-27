import {studentsMap} from "../../constants/studentsList";
import React from "react";
import {Swiper,  SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination, Keyboard} from 'swiper/modules';

interface StudentsSwiperProps {
    studentYear: string;
}
const StudentsSwiper:React.FC<StudentsSwiperProps> = ({studentYear}) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay, Keyboard]}
            navigation={{ nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",}}
            keyboard={{ enabled: true }}
            pagination={{ clickable: true }}
            loop={true}
            style={{ marginTop: 80}}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 3,
                },
            }}
            autoplay={{
                delay: 1200,
                disableOnInteraction: false
            }}

        >
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            {studentsMap.get(studentYear).map((studentContent: { photo: string | undefined; name: string | undefined;
                special: string; study: string}, index: React.Key | null | undefined) => (
                <SwiperSlide key={index} style={{  flexFlow: "column", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className="student_image_div">
                        <img className="student_image" src={studentContent.photo} alt={studentContent.name}/>
                    </div>
                    <div className="info_about_student">
                        <div className="student_name">
                            {studentContent.name}
                        </div>
                        <div className="student_special">
                            {studentContent.special}
                        </div>
                        <div className="student_study">
                            {studentContent.study}
                        </div>
                    </div>

                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default StudentsSwiper;