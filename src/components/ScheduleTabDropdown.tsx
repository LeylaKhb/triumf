import React, {useState} from 'react';
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";
import "../pages/schedule/schedule.css";
import "../styles/dropdown.scss"



interface ScheduleProps {}

export const ScheduleTabDropdown: React.FC<ScheduleProps> = () => {
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState("");
    const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]

    function handleSelectTitle(e: React.MouseEvent) {
        if (open === "") setOpen("active")
        if (open === "active") setOpen("")
    }

    return (
        <div >
            <TabsComponent selectedIndex={value}>
                <TabList>
                    <Tab key="monday" onClick={() => setValue(0)}>{week[0]}</Tab>
                    <Tab key="tuesday" onClick={() => setValue(1)}>{week[1]}</Tab>
                    <Tab key="wednesday" onClick={() => setValue(2)}>{week[2]}</Tab>
                    <Tab key="thursday" onClick={() => setValue(3)}>{week[3]}</Tab>
                    <Tab key="friday" onClick={() => setValue(4)}>{week[4]}</Tab>
                    <Tab key="saturday" onClick={() => setValue(5)}>{week[5]}</Tab>
                </TabList>
                <div className="select_schedule">
                    <form>
                        <div className="__select" data-state={open}>
                            <div className="__select__title"
                                 onClick={handleSelectTitle}>
                                {week[value]}
                            </div>
                            <div className="__select__content">
                                {week.map((value, index) => (
                                    <div>
                                        <input id="singleSelect" className="__select__input" type="radio"
                                               name="singleSelect"/>
                                        <label htmlFor="singleSelect" className="__select__label"
                                               onClick={() => {setValue(index); setOpen("")}}>{week[index]}</label>
                                        <input id="singleSelect" className="__select__input" type="radio"
                                               name="singleSelect" checked/>
                                        <label htmlFor="singleSelect" className="__select__label"
                                               onClick={() => {setValue(index); setOpen("")}}>{week[index]}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </form>
                </div>

                <TabPanel key="monday">
                    <table>
                        <tbody>
                        <tr><td className="schedule__time"> 15:00–16:30 </td><td> 11(3) /<br className="class" /> русский язык /<br className="aud" /> 313 ауд.</td></tr>
                        <tr><td className="schedule__time"> 16:00–17:30 </td><td> 8(1) /<br className="class" /> физика /<br className="aud" /> 319 ауд.</td></tr>
                        <tr><td className="schedule__time"> 16:40–18:10 </td><td> 11(2) /<br className="class" /> русский язык /<br className="aud" /> 313 ауд.</td></tr>
                        </tbody>
                    </table>
                </TabPanel>

                <TabPanel key="tuesday">
                    <table>
                        <tbody>
                        <tr><td className="schedule__time"> 15:20–16:50 </td><td> 11(1) /<br className="class" /> русский язык /<br className="aud" /> 313 ауд.</td></tr>
                        <tr><td className="schedule__time"> 17:00–18:30 </td><td> 11(5) /<br className="class" /> русский язык /<br className="aud" /> 313 ауд.</td></tr>
                        <tr><td className="schedule__time"> 17:00–18:30 </td><td> 11(1) /<br className="class" /> информатика /<br className="aud" /> 319 ауд.</td></tr>
                        <tr><td className="schedule__time"> 18:40–20:10 </td><td> 11(4) /<br className="class" /> русский язык /<br className="aud" /> 313 ауд.</td></tr>
                        <tr><td className="schedule__time"> 18:40–20:10 </td><td> 11(1) /<br className="class" /> обществознание <br className="aud" />/ 319 ауд.</td></tr>
                        </tbody>
                    </table>
                </TabPanel>
                <TabPanel key="wednesday">
                    <table>
                        <tbody>
                        <tr><td className="schedule__time"> 15:30–17:00 </td><td> 8(1) /<br className="class" /> русский язык /<br className="aud" /> 313 ауд.</td></tr>
                        <tr><td className="schedule__time"> 17:50–19:20 </td><td> 11(1) /<br className="class" /> история /<br className="aud" /> 319 ауд.</td></tr>
                        </tbody>
                    </table>
                </TabPanel>
                <TabPanel key="thursday">
                    <table>
                        <tbody>
                        <tr><td className="schedule__time"> 15:00–16:30 </td><td> 11(3) /<br className="class" /> русский язык /<br className="aud" /> 313 ауд.</td></tr>
                        <tr><td className="schedule__time"> 15:30–17:00 </td><td> 9(1) /<br className="class" /> физика /<br className="aud" /> 319 ауд.</td></tr>
                        <tr><td className="schedule__time"> 16:40–18:10 </td><td> 11(1) /<br className="class" /> русский язык /<br className="aud" /> 313 ауд.</td></tr>
                        <tr><td className="schedule__time"> 18:20–19:50 </td><td> 11(2) /<br className="class" /> русский язык /<br className="aud" /> 313 ауд.</td></tr>
                        </tbody>
                    </table>
                </TabPanel>
                <TabPanel key="friday">
                    <table>
                        <tbody>
                        <tr><td className="schedule__time"> 16:10–17:40 </td><td> 11(5) /<br className="class" /> русский язык /<br className="aud" /> 313 ауд.</td></tr>
                        <tr><td className="schedule__time"> 16:10–17:40 </td><td> 11(1) /<br className="class" /> информатика /<br className="aud" /> 319 ауд.</td></tr>
                        <tr><td className="schedule__time"> 17:50–19:20 </td><td> 11(4) /<br className="class" /> русский язык /<br className="aud" /> 313 ауд.</td></tr>
                        <tr><td className="schedule__time"> 17:50–19:20 </td><td> 11(1) /<br className="class" /> обществознание <br className="aud" /> / 319 ауд.</td></tr>
                        <tr><td className="schedule__time"> 19:30–21:00 </td><td> 11(1) /<br className="class" /> история /<br className="aud" /> 319 ауд.</td></tr>
                        </tbody>
                    </table>
                </TabPanel>
                <TabPanel key="saturday">
                    <table>
                        <tbody>
                        <tr><td className="schedule__time"> 13:30–15:00 </td><td> 9(1) /<br className="class" /> математика /<br className="aud" /> 319 ауд.</td></tr>
                        <tr><td className="schedule__time"> 15:10–16:40 </td><td> 9(1) /<br className="class" /> русский язык /<br className="aud" /> 313 ауд.</td></tr>
                        <tr><td className="schedule__time"> 15:10–16:40 </td><td> 9(2) /<br className="class" /> математика /<br className="aud" /> 319 ауд.</td></tr>
                        <tr><td className="schedule__time"> 16:50–18:20 </td><td> 9(2) /<br className="class" /> русский язык /<br className="aud" /> 313 ауд.</td></tr>
                        </tbody>
                    </table>
                </TabPanel>

            </TabsComponent>
        </div>
    );
};

export default ScheduleTabDropdown;
