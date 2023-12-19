import React from 'react';
import "./exam-preparation.css"
import pdf_icon from "../../static/examPreparation/pdf_icon.webp"
import doc_icon from "../../static/examPreparation/doc_icon.webp"
import Helmet from "react-helmet";

interface ExamPreparationProps {}

export const ExamPreparation: React.FC<ExamPreparationProps> = () => {
    return (
        <div className="page_content">
            <Helmet
                title="Подготовка к экзаменам"
            />
            <div className="page_name">
                Подготовка к экзаменам
            </div>

            <div style={{ textAlign: 'left', margin: '25px', color: 'black', lineHeight: 1.4 }}>
                <p>Предлагаем школьникам старших классов, готовящимся к сдаче ЕГЭ и ОГЭ, пройти программу дополнительной подготовки по основным образовательным предметам: математике, русскому языку, обществознанию, информатике, химии и др.</p>
                <p>Занятия проводятся в группах по 3-5 человек (усиленной подготовки), консультации – индивидуально.</p>
                <p>Интенсивность обучения зависит от выбранного профиля – технического или гуманитарного.</p>
                <p>"Гильдия репетиторов ТРИУМФ" - это:</p>
                    <ul>
                    <li>ведущие преподаватели вузов Казани;</li>
                    <li>индивидуальный подход в обучении;</li>
                    <li>консультации психолога
                        (в том числе и по вопросам профориентации);</li>
                    <li>консультации по вопросам поступления в вузы РФ;</li>
                    <li>проведение пробных ЕГЭ и ГИА.</li>
                </ul>
                <p style={{color: "gray"}}>Начало занятий со второй недели сентября, в дальнейшем – в зависимости от выбранного профиля и продолжительности обучения. Объявления о последующем наборе будут выставлены на сайте, в Инстаграм, в группе ВК и в СМИ в качестве рекламы.</p>
            </div>

            <div className="study_materials">
                <div style={{fontSize: '2rem', textAlign: 'center', fontFamily: '"Avenir Next"', paddingTop: '10px'}}>
                    Учебные пособия
                </div>

                <div className="study_books">
                    <div className="study_book">
                        <div className="book_name">
                            Материалы конференции "Национальный язык и культура в условиях глобализации"
                        </div>
                        <div className="icon_and_link">
                            <img className="book_image" src={pdf_icon} alt="pdf" />
                            <a className="book_link" href={require("../../static/examPreparation/nac_yazyk_2019.pdf")} download="nac_yazyk_2019.pdf">Скачать</a>
                        </div>
                    </div>
                    <div className="study_book">
                        <div className="book_name">
                            Русский язык: Учебное пособие
                        </div>
                        <div className="icon_and_link">
                            <img className="book_image" src={pdf_icon} alt="pdf" />
                            <a className="book_link" href={require("../../static/examPreparation/Russkiy_yazyk_Uchebnoe_posobie.pdf")} download="Russkiy_yazyk_Uchebnoe_posobie.pdf">Скачать</a>
                        </div>
                    </div>
                    <div className="study_book">
                        <div className="book_name">
                            Русский язык: Cборник вариантов ЕГЭ
                        </div>
                        <div className="icon_and_link">
                            <img className="book_image" src={pdf_icon} alt="pdf" />
                            <a className="book_link" href={require("../../static/examPreparation/Russkiy_yazyk_sbornik.pdf")} download="Russkiy_yazyk_sbornik.pdf">Скачать</a>
                        </div>
                    </div>
                    <div className="study_book">
                        <div className="book_name">
                            Русский язык и культура речи: Теория
                        </div>
                        <div className="icon_and_link">
                            <img className="book_image" src={pdf_icon} alt="pdf" />
                            <a className="book_link" href={require("../../static/examPreparation/Russkiy_yazyk_i_kultura_rechi_Teoria.pdf")} download="Russkiy_yazyk_i_kultura_rechi_Teoria.pdf">Скачать</a>
                        </div>
                    </div>
                    <div className="study_book">
                        <div className="book_name">
                            Русский язык и культура речи: Практикум
                        </div>
                        <div className="icon_and_link">
                            <img className="book_image" src={pdf_icon} alt="pdf" />
                            <a className="book_link" href={require("../../static/examPreparation/Russkiy_yazyk_i_kultura_rechi_Praktika.pdf")} download="Russkiy_yazyk_i_kultura_rechi_Praktika.pdf">Скачать</a>
                        </div>
                    </div>
                    <div className="study_book">
                        <div className="book_name">
                            Дифференциальное исчисление функций нескольких переменных
                        </div>
                        <div className="icon_and_link">
                            <img className="book_image" src={pdf_icon} alt="pdf" />
                            <a className="book_link" href={require("../../static/examPreparation/Diff_ischislenie_funkciy_neskolkih.pdf")} download="Diff_ischislenie_funkciy_neskolkih.pdf">Скачать</a>
                        </div>
                    </div>
                    <div className="study_book">
                        <div className="book_name">
                            Интегральное исчисление функций одной переменной. Практикум. Часть I
                        </div>
                        <div className="icon_and_link">
                            <img className="book_image" src={pdf_icon} alt="pdf" />
                            <a className="book_link" href={require("../../static/examPreparation/Diff_ischislenie_funkciy_odnoi_chast_1.pdf")} download="Diff_ischislenie_funkciy_odnoi_chast_1.pdf">Скачать</a>
                        </div>
                    </div>
                    <div className="study_book">
                        <div className="book_name">
                            Интегральное исчисление функций одной переменной. Практикум. Часть II
                        </div>
                        <div className="icon_and_link">
                            <img className="book_image" src={pdf_icon} alt="pdf" />
                            <a className="book_link" href={require("../../static/examPreparation/Diff_ischislenie_funkciy_odnoi_chast_2.pdf")} download="Diff_ischislenie_funkciy_odnoi_chast_2.pdf">Скачать</a>
                        </div>
                    </div>
                    <div className="study_book">
                        <div className="book_name">
                            Практический курс к учебнику "Русский язык"(Фахрутдинова М.Т). Часть I
                        </div>
                        <div className="icon_and_link">
                            <img className="book_image" src={doc_icon} alt="doc" />
                            <a className="book_link" href={require("../../static/examPreparation/Prakticheskiy_kurs_k_uchebniku_quot_Russkiy_yazyk_quot_1_ch.zip")} download="Prakticheskiy_kurs_k_uchebniku_quot_Russkiy_yazyk_quot_1_ch.zip">Скачать</a>
                        </div>
                    </div>
                    <div className="study_book">
                        <div className="book_name">
                            Практический курс к учебнику "Русский язык"(Фахрутдинова М.Т). Часть II
                        </div>
                        <div className="icon_and_link">
                            <img className="book_image" src={doc_icon} alt="doc" />
                            <a className="book_link" href={require("../../static/examPreparation/Prakticheskiy_kurs_k_uchebniku_quot_Russkiy_yazyk_quot_2_ch.zip")} download="Prakticheskiy_kurs_k_uchebniku_quot_Russkiy_yazyk_quot_2_ch.zip">Скачать</a>
                        </div>
                    </div>
                    <div className="study_book">
                        <div className="book_name">
                            Практический курс к учебнику "Русский язык"(Фахрутдинова М.Т). Часть III-I
                        </div>
                        <div className="icon_and_link">
                            <img className="book_image" src={doc_icon} alt="doc" />
                            <a className="book_link" href={require("../../static/examPreparation/Prakticheskiy_kurs_k_uchebniku_quot_Russkiy_yazyk_quot_3_ch.zip")} download="Prakticheskiy_kurs_k_uchebniku_quot_Russkiy_yazyk_quot_3_ch.zip">Скачать</a>
                        </div>
                    </div>
                    <div className="study_book">
                        <div className="book_name">
                            Практический курс к учебнику "Русский язык"(Фахрутдинова М.Т). Часть III-II
                        </div>
                        <div className="icon_and_link">
                            <img className="book_image" src={doc_icon} alt="doc" />
                            <a className="book_link" href={require("../../static/examPreparation/Prakticheskiy_kurs_k_uchebniku_quot_Russkiy_yazyk_quot_4_ch.zip")} download="Prakticheskiy_kurs_k_uchebniku_quot_Russkiy_yazyk_quot_4_ch.zip">Скачать</a>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default ExamPreparation;
