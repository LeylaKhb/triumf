import React from 'react';
import "./home.css"

import "swiper/css/autoplay"
import ScheduleTabDropdown from "../../components/ScheduleTabDropdown";
import HomeGallery from "./HomeGallery";
import NewsHome from "./NewsHome";
import ReviewsHome from "./ReviewsHome";
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    return (
        <div>
            <div className="page_name" style={{marginBottom: 30}}>
                Главная
            </div>
            <HomeGallery />
            <div className="page_content">
                <NewsHome />
                <ReviewsHome />

                <div className="title_home" style={{ marginBottom: 10}}>
                    <div style={{ fontSize: '1.8rem', marginLeft: 20}}>
                        Расписание
                    </div>
                </div>
                <ScheduleTabDropdown />
            </div>
        </div>
    );
};

export default Home;
