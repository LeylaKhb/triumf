import {Link} from "react-router-dom";
import EmblemHeader from "./EmblemHeader";
import vk_footer from "../../static/vk_footer.png";
import inst_footer from "../../static/inst_footer.png";
import React from "react";

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer style={{ position: 'relative' }}>
            <div className="footer-container" style={{ backgroundColor: '#0E294B', height: '220px', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexFlow: 'row', justifyContent: 'space-around' }}>
                <div className="footer-column" style={{ display: 'flex', flexFlow: 'column', paddingTop: 20, paddingLeft: 10, width: '160px'}}>
                    <Link to="/" style={{transform: 'translateY(15%) translateX(-7%)'}}>
                        <EmblemHeader />
                    </Link>

                    <h1 style={{ textAlign: 'center', width: '10%', height: '10%', color: '#ffffff', fontSize: '0.65rem', transform: 'translateY(45%) translateX(15%)' }}>
                        ГИЛЬДИЯ РЕПЕТИТОРОВ
                    </h1>

                    <h1 style={{ textAlign: 'center', width: '10%', height: '10%', color: '#ffffff', fontSize: '1.8rem', transform: 'translateY(-35%) translateX(15%)' }}>
                        ТРИУМФ
                    </h1>
                </div>

                <div className="link_column">
                    <div>
                        <Link to="/about">
                            <button className="footer-button">О нас</button>
                        </Link>
                        <Link to="/news">
                            <button className="footer-button">Новости</button>
                        </Link>
                        <Link to="/teachers">
                            <button className="footer-button">Преподаватели</button>
                        </Link>
                        <Link to="/students">
                            <button className="footer-button">Наши ученики</button>
                        </Link>

                    </div>
                    <div>
                        <Link to="/exam-preparation">
                            <button className="footer-button">Подготовка к экзаменам</button>
                        </Link>
                        <Link to="/schedule">
                            <button className="footer-button">Расписание</button>
                        </Link>
                        <Link to="/feedback">
                            <button className="footer-button">Отзывы</button>
                        </Link>
                        <Link to="/how-to-find">
                            <button className="footer-button">Как нас найти</button>
                        </Link>
                    </div>
                </div>


                <div className="link_column" style={{ marginRight: 5}}>
                    <a href="https://vk.com/kazantriumf" >
                        <img src={vk_footer} alt="vk" style={{ height: 30, width: 30 }} />
                    </a>
                    <a href="https://www.instagram.com/_triumf_/" >
                        <img src={inst_footer}  alt="instagram" style={{ height: 30, width: 30}} />
                    </a>
                </div>

                <div className="link_column">
                    <div className="info_name_footer">
                        Запись по телефонам:
                    </div>
                    <div className="links_container_footer">
                        <a href="tel:+78432589759" style={{color: '#ffffff'}}>+7 (843) 258-97-59, </a>
                        <a href="tel:+79600489759" style={{color: '#ffffff'}}>+7 (960) 048-97-59</a>
                    </div>
                    <div className="info_name_footer">
                        Адрес:
                    </div>
                    <div className="links_container_footer">
                        <a href="https://yandex.ru/maps/-/CDaDiQnM" style={{color: '#ffffff'}}>г. Казань, </a>
                        <a href="https://yandex.ru/maps/-/CDaDiQnM" style={{color: '#ffffff'}}>ул. Жуковского, </a>
                        <a href="https://yandex.ru/maps/-/CDaDiQnM" style={{color: '#ffffff'}}>д. 8, офис 313</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;