import React from 'react';
import {useParams} from "react-router-dom";

import "./students-by-year.css"
import "swiper/css"
import "swiper/css/autoplay"
import StudentsSwiper from "./StudentsSwiper";
import Helmet from "react-helmet";

interface StudentsByYearProps {}

export const StudentsByYear: React.FC<StudentsByYearProps> = () => {
    let { studentYear } = useParams();
    if (studentYear === undefined) studentYear = '2021';
    let name = `Выпускники ${studentYear} года`
    return (
        <div>
            <Helmet
                title={name}
            />
            <div className="page_name">
                {name}
            </div>
            <StudentsSwiper studentYear={studentYear} />
        </div>
    )
}

export default StudentsByYear;