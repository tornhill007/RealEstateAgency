import React from 'react';
import classes from './Jobs.module.css';
import {NavLink} from "react-router-dom";

const Jobs = (props) => {

    console.log(props);
    return <div className={classes.wrapper}>
        <div className={classes.wrapperBlock}>
            <h1 className={classes.head}>Our positions</h1>
            <div className={classes.wrapperHead}>
                <div className={classes.wrapperImg}>
                    <img src="https://blagovist.ua/sites/blagovist.ua/files/inline-images/Vacancy.jpg"
                         className={classes.itemImg} alt="interview"/>
                </div>
                <div className={classes.item}>
                    <p>Our Real Estate Agency is constantly evolving and invites the cooperation of both experienced and
                        young professionals who seek to successfully realize themselves in the real estate industry. At
                        the
                        moment, the real estate agency Park Lane has the following vacancies:</p>
                </div>
            </div>
            <div className={classes.listWrapper}>
                <ul className={classes.list}>
                    <li className={classes.listRow}>
                        <div className={classes.linkList}><NavLink to="/jobs/1" className={classes.title}>Realtor as a
                            specialist
                            in buying / selling homes</NavLink></div>
                        <div className={classes.content}>
                            <p>
                                Our Real Estate Agency invites the cooperation of realtors, home purchase and sale
                                specialists and rental houses. Collaboration with us is a teamwork, where everyone has
                                the
                                opportunity to get internships with the best specialists of the company, sign contracts
                                during the internship period and earn money.
                            </p>
                        </div>
                        <NavLink to="/jobs/1" className={classes.btnMore}>Read more</NavLink>
                    </li>
                    <li className={classes.listRow}>
                        <div className={classes.linkList}><NavLink to="/jobs/2" className={classes.title}>Specialist in
                            buying /
                            selling real estate</NavLink></div>
                        <div className={classes.content}>
                            <p>Collaboration with our company gives you the opportunity to study and learn real estate
                                technology, get legal knowledge, improve negotiation skills and work with clients.</p>
                        </div>
                        <NavLink to="/jobs/2" className={classes.btnMore}>Read more</NavLink>
                    </li>
                    <li className={classes.listRow}>
                        <div className={classes.linkList}><NavLink to="/jobs/3" className={classes.title}>Commercial
                            real estate
                            specialist</NavLink></div>
                        <div className={classes.content}>
                            <p>With the development of the direction we offer cooperation in the field of commercial
                                real
                                estate operations. Our activity is services in buying / selling commercial premises of
                                the
                                capital. Many years of experience provide professionals who work with us tangible
                                benefits.</p>
                        </div>
                        <NavLink to="/jobs/3" className={classes.btnMore}>Read more</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
};

export default Jobs;