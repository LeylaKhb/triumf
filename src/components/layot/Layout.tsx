import React, {ReactNode} from 'react';
import "../../styles/dropdown.scss"

import "./layot.css"
import Header from "./Header";
import Footer from "./Footer";
import Helmet from "react-helmet";



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
