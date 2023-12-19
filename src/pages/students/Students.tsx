import React from 'react';
import {Link} from "react-router-dom";

import "./students.css"

import {studentsLinks} from "../../constants/studentsLinks"
import Helmet from "react-helmet";


interface StudentsProps {}

export const Students: React.FC<StudentsProps> = () => {
    return (
        <div style={{ marginLeft: '10%', marginRight: '10%'}}>
            <Helmet
                title="Наши ученики"
            />
            <div className="page_name">
                Наши ученики
            </div>
            <div className="students_grid">

            {studentsLinks.map((studentsContent, index) => (
                <Link key={index} to={studentsContent.link} className="link_to_all_students">
                    <div>
                        <img className="students_photo" src={studentsContent.image} alt={studentsContent.title}/>
                        <p className="students_photo_caption">
                            {studentsContent.title}
                        </p>
                    </div>
                </Link>
                ))}
            </div>
        </div>
    );
};

export default Students;
