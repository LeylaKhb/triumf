import React from 'react';
import YandexMap from "../../components/YandexMap";

import "./how-to-find.css"
import LocationGallery from "./LocationGallery";
import LocationInfo from "./LocationInfo";
import Helmet from "react-helmet";

interface HowToFindProps {}

export const HowToFind: React.FC<HowToFindProps> = () => {
    return (
        <div className="page_content">
            <Helmet
                title="Как нас найти"
            />
            <div className="page_name">
                Как нас найти
            </div>
            <div>
                <YandexMap />
            </div>

            <div className="swiper_and_info">
                <LocationGallery />
                <LocationInfo />
            </div>
        </div>
    );
};

export default HowToFind;
