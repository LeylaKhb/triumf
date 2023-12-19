import React from 'react';
import "./schedule.css";
import "../../styles/dropdown.scss"
import ScheduleTabDropdown from "../../components/ScheduleTabDropdown";
import Helmet from "react-helmet";



interface ScheduleProps {}

export const Schedule: React.FC<ScheduleProps> = () => {
    return (
        <div >
            <Helmet
                title="Расписание занятий"
            />
            <div className="page_name">
                Расписание занятий
            </div>
            <ScheduleTabDropdown />
        </div>
    );
};

export default Schedule;
