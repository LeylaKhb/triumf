import React, {ReactNode, useState} from 'react';
import head_img from '../../static/head_img.png';
import instagram from '../../static/instagram.png';
import vk from '../../static/vk.png';
import vk_footer from "../../static/vk_footer.png"
import inst_footer from "../../static/inst_footer.png"
import {Link, redirect} from 'react-router-dom';
import EmblemHeader from './EmblemHeader';
import EmblemFooter from './EmblemFooter';
import "../../styles/dropdown.scss"

import "./layot.css"
import Header from "./Header";
import Footer from "./Footer";


interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <div>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
