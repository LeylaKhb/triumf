import React from 'react';
import {useParams} from "react-router-dom";

import "./students-by-year.css"
import "swiper/css"
import "swiper/css/autoplay"
import StudentsSwiper from "./StudentsSwiper";

interface StudentsByYearProps {}

export const StudentsByYear: React.FC<StudentsByYearProps> = ({ }) => {
    let { studentYear } = useParams();
    if (studentYear === undefined) studentYear = '2021';
    return (
        <div>
            <div className="page_name">
                Выпускники {studentYear} года
            </div>
            <StudentsSwiper studentYear={studentYear} />
        </div>
    )
}

export default StudentsByYear;