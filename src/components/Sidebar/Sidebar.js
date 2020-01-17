import React from 'react';
import classes from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
            <nav className={classes.menuVertical}>
                <ul>
                    <li><a href="#1">
                        <div className={classes.img_n}><img src="earth.png"/></div>
                        <span>About site</span></a></li>

                    <li><a href="#2">
                        <div className={classes.img_n}><img src="stat.png"/></div>
                        <span>+ Buying</span></a>
                        <ul>
                            <li><a href="#2-1">Apartment</a></li>
                            <li><a href="#2-2">House</a></li>
                            <li><a href="#2-2">Premise</a></li>
                        </ul>
                    </li>

                    <li><a href="#3">
                        <div className={classes.img_n}><img src="prof.png"/></div>
                        <span>+ Rent</span></a>
                        <ul>
                            <li><a href="#3-1">Daily rent</a></li>
                            <li><a href="#3-2">Long term rental</a></li>
                        </ul>
                    </li>

                    <li><NavLink to="/register">
                        <div className={classes.img_n}><img src="zak.png"/></div>
                        <span>Registration</span></NavLink></li>
                </ul>
            </nav>
            // {/*<div className={classes.menu}>*/}
            // {/*    <div className={classes.footer}>Komar Andrew © 2020<br/>*/}
            // {/*        powered by <a href="#1"><font color="#9dacaa">Me</font></a>*/}
            // {/*    </div>*/}
            // {/*</div>*/}


)
};

export default Sidebar;