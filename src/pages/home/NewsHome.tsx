import {Link} from "react-router-dom";
import students2021_all from "../../static/students/2021/students2021_all.webp";
import students2020_all from "../../static/students/2020/students2020_all.webp";
import React from "react";

const NewsHome:React.FC = () => {
    return (
        <div>
            <div className="title_home">
                <div style={{ fontSize: '1.8rem', marginLeft: 20}}>
                    Новости
                </div>
                <Link to="/news" style={{ textDecoration: "none"}}>
                    <div className="all_link">
                        Все новости →
                    </div>
                </Link>
            </div>
            <div className="news_home">
                <div className="news_grid_home">
                    <Link to="/students/2021" className="news_div_home">
                        <div className="news_photo_div">
                            <img className="news_photo" src={students2021_all} alt="first new"/>
                        </div>
                        <div className="news_info">
                            <div className="news_date">
                                3 янв. 2022 г.
                            </div>
                            <div className="news_title">
                                Выпускники 2021 года
                            </div>
                            <div className="news_brief">
                                Елкина Дарина — Первый Московский государственный медицинский университет имени И. М. Сеченова (педиатрия) Хабибуллин Артём — Российский...
                            </div>
                        </div>
                    </Link>
                    <Link to="/students/2020" className="news_div_home">
                        <div className="news_photo_div">
                            <img className="news_photo" src={students2020_all} alt="second new"/>
                        </div>
                        <div className="news_info">
                            <div className="news_date">
                                3 янв. 2021 г.
                            </div>
                            <div className="news_title">
                                Выпускники 2020 года
                            </div>
                            <div className="news_brief">
                                Шинкарёв Игорь - Национальный исследовательский технологический университет «МИСиС», г.Москва (прикладная информатика)...                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NewsHome;