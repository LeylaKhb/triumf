import React from 'react';


import "./feedback.css"
import ReviewsSwiper from "./ReviewsSwiper";
import Helmet from "react-helmet";

interface FeedbackProps {}

export const Feedback: React.FC<FeedbackProps> = () => {
    return (
        <div className="page_content">
            <Helmet
                title="Отзывы"
            />
            <div className="page_name">
                Отзывы
            </div>

            <ReviewsSwiper />
        </div>
    );
};

export default Feedback;
