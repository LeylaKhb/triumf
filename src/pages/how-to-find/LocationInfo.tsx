import React from "react";

const LocationInfo:React.FC = () => {
    return (
        <div className="info_location">
            <div className="title_info_location">
                адрес:
            </div>
            <div className="desc_info_location">
                <a className="link_location" href="https://yandex.ru/maps/-/CDaDiQnM">г. Казань, ул. Жуковского, д. 8, офис 313</a>
            </div>

            <div className="title_info_location">
                телефоны:
            </div>
            <div className="desc_info_location">
                <a className="link_location" href="tel:+78432589759">+7 (843) 258-97-59, </a>
                <a className="link_location" href="tel:+79600489759">+7 (960) 048-97-59</a>
            </div>

            <div className="title_info_location">
                e-mail:
            </div>
            <div className="desc_info_location">
                <a className="link_location" href="mailto:info@tutor-kzn.ru">info@tutor-kzn.ru</a>
            </div>

            <div className="title_info_location">
                социальные сети:
            </div>
            <div className="desc_info_location">
                <a className="link_location" href="https://vk.com/kazantriumf" >vk.com/kazantriumf</a>
                <a className="link_location" href="https://www.instagram.com/_triumf_/">@_triumf_</a>
            </div>
        </div>
    )
}

export default LocationInfo;