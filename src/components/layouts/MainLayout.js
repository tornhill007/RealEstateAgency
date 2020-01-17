import React from 'react';
import classes from './Selling.module.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import BreadScrumbs from "../Navbar/BreadScrumbs";

const MainLayout = (props) => {
    return (
        <div>
            <Header/>
            <BreadScrumbs/>
            <Main/>
            <Footer/>

        </div>
    )
};

export default MainLayout;