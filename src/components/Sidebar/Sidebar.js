import React from 'react';
import classes from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
            <nav className={classes.menuVertical}>
                <ul>
                    <li><NavLink to='/home'>
                        <div className={classes.img_n}><img src="earth.png"/></div>
                        <span>About site</span></NavLink></li>

                    <li className={classes.listItem}>
                        <div className={classes.img_n}><img src="stat.png"/></div>
                        <span>+ Buying</span>
                        <ul>
                            <li><NavLink to='/home'>Apartment</NavLink></li>
                            <li><NavLink to='/home'>House</NavLink></li>
                            <li><NavLink to='/home'>Premise</NavLink></li>
                        </ul>
                    </li>

                    <li className={classes.listItem}>
                        <div className={classes.img_n}><img src="prof.png"/></div>
                        <span>+ Rent</span>
                        <ul>
                            <li><NavLink to='/home'>Daily rent</NavLink></li>
                            <li><NavLink to='/home'>Long term rental</NavLink></li>
                        </ul>
                    </li>

                    <li><NavLink to='/register' className={classes.link}>
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