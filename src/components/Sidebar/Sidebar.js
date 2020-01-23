import React from 'react';
import classes from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
            <nav className={classes.menuVertical}>
                <ul>
                    <li><NavLink to='/home'>
                        <div className={classes.img_n}><img src="stat.png"/></div>
                        <span>+ Buying</span></NavLink>
                        <ul>
                            <li><NavLink to='/home'>Apartment</NavLink></li>
                            <li><NavLink to='/home'>House</NavLink></li>
                            <li><NavLink to='/home'>Premise</NavLink></li>
                        </ul>
                    </li>

                    <li><NavLink to='/home'>
                        <div className={classes.img_n}><img src="prof.png"/></div>
                        <span>+ Rent</span></NavLink>
                        <ul>
                            <li><NavLink to='/home'>Daily rent</NavLink></li>
                            <li><NavLink to='/home'>Long term rental</NavLink></li>
                        </ul>
                    </li>

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