import {Link} from "react-router-dom";
import EmblemHeader from "./EmblemHeader";
import vk from "../../static/vk.png";
import instagram from "../../static/instagram.png";
import React, {useState} from "react";
import head_img from "../../static/head_img.png";

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
    const backgroundImage = {
        backgroundImage: `url(${head_img})`,
        width: '100%',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
    };

    const [open, setOpen] = useState("");
    const [hidden, setHidden] = useState(true);
    function handleSelectTitle(e: React.MouseEvent) {
        if (open == "") {
            setOpen("active");
            setHidden(false);
        }
        if (open == "active") {
            setHidden(true);
            setOpen("")
        }
    }

    function handleOptionClick() {
        setOpen("");
        setHidden(true);
    }

    return (
        <header className='w-full' style={{ position: 'relative', justifyContent: 'flex-start', alignItems: 'center' }}>
            <div className="background-image" style={backgroundImage}>
                <Link to="/" className="header_emblem" onClick={handleOptionClick}>
                    <EmblemHeader />
                </Link>
                <div className='text-white'>
                    <h1 className="title_header_first">
                        ГИЛЬДИЯ<br /> РЕПЕТИТОРОВ
                    </h1>
                    <h1 className="title_header_second">
                        ТРИУМФ
                    </h1>
                </div>

                <div className='info_about_header'>
                    <div>
                        <div className="info_name_header">
                            Запись по телефонам:
                        </div>
                        <div className="links_container_header">
                            <a href="tel:+78432589759" style={{color: '#ffffff'}}>+7 (843) 258-97-59, </a>
                            <a href="tel:+79600489759" style={{color: '#ffffff'}}>+7 (960) 048-97-59</a>
                        </div>
                        <div className="info_name_header">
                            Адрес:
                        </div>
                        <div className="links_container_header">
                            <a href="https://yandex.ru/maps/-/CDaDiQnM" style={{color: '#ffffff'}}>г. Казань, </a>
                            <a href="https://yandex.ru/maps/-/CDaDiQnM" style={{color: '#ffffff'}}>ул. Жуковского, </a>
                            <a href="https://yandex.ru/maps/-/CDaDiQnM" style={{color: '#ffffff'}}>д. 8, офис 313</a>
                        </div>
                    </div>
                    <div>
                        <div style={{ marginTop: 9, display: 'flex'}}>
                            <a href="https://vk.com/kazantriumf" >
                                <img src={vk} alt="vk" className="soc_network_img"  />
                            </a>
                            <a href="https://www.instagram.com/_triumf_/" >
                                <img src={instagram}  alt="instagram" className="soc_network_img" style={{ marginLeft: 8 }} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="button-row" >
                    <Link to="/about">
                        <button className="navigation-button">О нас</button>
                    </Link>
                    <Link to="/news">
                        <button className="navigation-button">Новости</button>
                    </Link>
                    <Link to="/teachers">
                        <button className="navigation-button">Преподаватели</button>
                    </Link>
                    <Link to="/students">
                        <button className="navigation-button">Наши ученики</button>
                    </Link>
                    <Link to="/exam-preparation">
                        <button className="navigation-button">Подготовка <br/> к экзаменам</button>
                    </Link>
                    <Link to="/schedule">
                        <button className="navigation-button">Расписание</button>
                    </Link>
                    <Link to="/feedback">
                        <button className="navigation-button">Отзывы</button>
                    </Link>
                    <Link to="/how-to-find">
                        <button className="navigation-button">Как нас найти</button>
                    </Link>
                </div>

                <div className="select_header">
                    <form>
                        <div className="__select" data-state={open}>
                            <div className="__select__title"
                                 onClick={handleSelectTitle}>
                                <div style={{ position: 'absolute', right: 30}}>☰</div>
                            </div>
                            <div className="__select__content">
                                <div>
                                    <Link hidden={hidden} style={{ textDecoration: "none", color: 'black'}} to="/about" onClick={handleOptionClick}><div className="link_select">О нас</div></Link>
                                    <Link hidden={hidden} style={{ textDecoration: "none", color: 'black'}} to="/news" onClick={handleOptionClick}><div className="link_select">Новости</div></Link>
                                    <Link hidden={hidden} to="/teachers" style={{ textDecoration: "none", color: 'black'}} onClick={handleOptionClick}><div className="link_select">Преподаватели</div></Link>
                                    <Link hidden={hidden} to="/students" style={{ textDecoration: "none", color: 'black'}} onClick={handleOptionClick}><div className="link_select">Наши ученики</div></Link>
                                    <Link hidden={hidden} to="/exam-preparation" style={{ textDecoration: "none", color: 'black'}} onClick={handleOptionClick}><div className="link_select">Подготовка к экзаменам</div></Link>
                                    <Link hidden={hidden} to="/schedule" style={{ textDecoration: "none", color: 'black'}} onClick={handleOptionClick}><div className="link_select">Расписание</div></Link>
                                    <Link hidden={hidden} to="/feedback" style={{ textDecoration: "none", color: 'black'}} onClick={handleOptionClick}><div className="link_select">Отзывы</div></Link>
                                    <Link hidden={hidden} to="/how-to-find" style={{ textDecoration: "none", color: 'black'}} onClick={handleOptionClick}><div className="link_select">Как нас найти</div></Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Header;