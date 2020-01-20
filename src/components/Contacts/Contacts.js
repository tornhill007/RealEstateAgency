import React from 'react';
import {MapContainer} from "./Map/Map";
import classes from './Contacts.module.css';
import {Link, NavLink} from "react-router-dom";
import {Nav} from "react-bootstrap";
import  GoogleApiWrapper from "./Map/Map.js"

const Contacts = () => {
    return (
        <div className={classes.wrapperContacts}>
            <div className={classes.imgWrap}>
                <div className={classes.img}>
                    <img className={classes.image} src="http://rivieraradio.mc/medias/homeslider/c/noblessa-1150x400.jpg" alt=""/>
                </div>
            </div>
            <div className={classes.wrapper}>
                <div className={classes.itemLeft}>
                    <div className={classes.itemLeftWrapper}>
                    <div>

                        <span>
                            <img className={classes.emblem} src='emblem.jpg' alt="emblem"/>
                        </span>
                    </div>
                    <div>
                        <p className={classes.itemText}>The office of our elite <NavLink to="/main">real estate agency</NavLink> is located in the very center of
                            the city, a 2-minute walk from the Olimpiysky metro station. Our address: Business Olympic
                            Center, 72 Krasnoarmeyskaya (Entrance from Gorky Street), 23rd floor, office 75. We are
                            pleased to welcome our customers, both by appointment and without.</p>
                        <p>
                            <p className={classes.itemText}>Our business hours:</p>
                            <p className={classes.timeWrapper}>
                                <span>
                                    Monday to Friday from 10:00 to 20:00
                                </span>
                                <span>
                                    Saturday from 10:00 to 17:00
                                </span>
                                <span>
                                    Sunday by appointment only
                                </span>
                            </p>
                        </p>
                        <p className={classes.itemText} className={classes.itemInfo}>
                            <span>

                            phone: +38 063 141 03 20
                            </span>
                            <span>

                            tornhill1997@gmail.com
                            </span>
                        </p>
                        <p className={classes.itemText}>
                            Schedule
                        </p>
                        <div className={classes.border}>
                            <div><span>MD-FR</span><span className={classes.time}> 10:00 — 20:00</span></div>
                            <div><span>ST</span><span className={classes.time}> 10:00 — 17:00</span></div>
                            <div><span>SN</span><span className={classes.time}> Weekend</span></div>
                        </div>
                        <ul className={classes.itemText}>
                            <li className={classes.itemList}>
                                <img className={classes.emblemPhone} src='./phone.png' alt="phone"/>
                                <span>+38 063 141 03 20</span>
                            </li>
                            <li className={classes.itemList}>
                                <img className={classes.emblemPhone} src='./message.jpg' alt="phone"/>
                                <span>tornhill1997@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className={classes.itemRight}>
                    <GoogleApiWrapper/>
                </div>
            </div>
        </div>
    )


};

export default Contacts;