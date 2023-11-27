import React from 'react';


import "./feedback.css"
import ReviewsSwiper from "./ReviewsSwiper";

interface FeedbackProps {}

export const Feedback: React.FC<FeedbackProps> = ({ }) => {
    return (
        <div className="page_content">
            <div className="page_name">
                Отзывы
            </div>

            <ReviewsSwiper />
        </div>
    );
};

export default Feedback;
