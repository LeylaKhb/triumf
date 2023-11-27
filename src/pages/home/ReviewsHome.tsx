import React from "react";
import {Link} from "react-router-dom";
import {Swiper,  SwiperSlide} from 'swiper/react';
import { Navigation} from 'swiper/modules';
import {homeReviews} from "../../constants/homeMaterials";

const ReviewsHome:React.FC = () => {
    return (
        <div>
            <div className="title_home">
                <div style={{ fontSize: '1.8rem', marginLeft: 20}}>
                    Отзывы
                </div>
                <Link to="/feedback" style={{ textDecoration: "none"}}>
                    <div className="all_link">
                        Все отзывы →
                    </div>
                </Link>
            </div>

            <div className="reviews_home">
                <Swiper
                    modules={[Navigation]}
                    navigation={{ nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",}}
                    loop={true}
                    style={{ marginTop: 20, width: '100%', height: '40%', display: 'flex', justifyContent: "center", alignItems: 'center', marginBottom: 90}}
                    slidesPerView={2}
                    breakpoints={{
                        100: {slidesPerView: 1},
                        630: {slidesPerView: 2}
                    }}

                >
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>

                    {homeReviews.map((homeReviewContent, index) => (
                        <SwiperSlide key={index} style={{display: "flex", alignItems: "center", justifyContent: "center", height: '30%'}}>
                            <div className="review_home" >
                                <div className="review_header" >
                                    <div style={{ width: 50, height: 50}}>
                                        <img className="review_image" src={homeReviewContent.photo} alt={homeReviewContent.name}/>
                                    </div>
                                    <div style={{marginLeft: 10}}>
                                        <div style={{ fontWeight: 600, marginBottom: 2, fontSize: '1.3rem'}}>
                                            {homeReviewContent.name}
                                        </div>
                                        <div style={{ color: "gray"}}>
                                            {homeReviewContent.date}
                                        </div>
                                    </div>
                                </div>

                                <div className="review_content">
                                    {homeReviewContent.content}
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default ReviewsHome;