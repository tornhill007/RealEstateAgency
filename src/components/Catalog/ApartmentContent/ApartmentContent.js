import React from 'react';
import {NavLink} from "react-router-dom";
import arrayContent from "../../../common/arrayContent";
import consts from "../../About/Jobs/JobsPosition/consts";
import classes from './ApartmentContent.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuilding, faHome, faLock, faTools} from "@fortawesome/free-solid-svg-icons";
import {MyGallery} from "./Gallery/Gallery";


const ApartmentContent = (props) => {
    // if (props.apartmentContent.length === 0) {
    //     props.setContent( arrayContent
    //     )
    // }

    let pathname = props.location.pathname.substr(1).split('/')[1];
    console.log(pathname);
    try {
        var content = arrayContent[pathname - 1];
    } catch (e) {
        var content = 'ERROR 404';
    }


    return <div className={classes.wrapper}>
        <div className={classes.wrapHead}>
            <div>
                <span>Return to catalog</span>
            </div>
            <div>
                <span>{content.advertName}</span>
            </div>
            <div>Sharing</div>
            <div>
                <span>Submit your application</span>
            </div>
        </div>
        <div className={classes.wrapHead}>
            <span>{content.location}</span>
            <span>{content.complex}</span>
            <span>ID:{content.id}</span>
            <span>Main information</span>
            <span>Equipment</span>
        </div>
        <div>
            <div>
                <span>Galery</span>
                <MyGallery/>
            </div>
            <div>
                <div>
                    <div>
                        <span>
                            Room
                        </span>
                        <span>
                            {content.roomAmount}
                        </span>
                        <div>
                            <span>
                                {content.roomDesc}
                            </span>
                        </div>
                    </div>
                    <div>
                        <span>
                            Area
                        </span>
                        <span>
                            {content.area} m<sup>2</sup>
                        </span>
                        <div>
                            <span>
                                {content.areaLiving} m<sup>2</sup> Living
                            </span>
                            <span>
                                {content.areaKitchen} m<sup>2</sup> Kitchen
                            </span>
                        </div>
                    </div>
                    <div>
                        <span>
                            Price
                        </span>
                        <span>
                            {content.price} USD
                        </span>
                        <div>
                            <span>For 1 m<sup>2</sup></span>
                            <span>{content.priceMetr}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <span>
                            Description
                        </span>
                    </div>
                    <div>
                        <span>
                            {content.descriptionFull}
                        </span>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <span>Floor</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faBuilding} className={classes.icon} />
                            <span>
                                {content.floor} floor from {content.floorMax}
                            </span>
                            <span>
                                {content.building}
                            </span>
                            <span>
                                {content.elevator}
                            </span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>Layout</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faHome} className={classes.icon} />
                            <span>
                                {content.layout}
                            </span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>Repair</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faTools} className={classes.icon} />
                            <span>{content.repair}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <span>The contact person</span>
                    </div>
                    <div>
                        <img src="https://kievintlrealty.com.ua/assets/main_avatar-5042ba84db413fc4b17edfeb0ab4456a3f6b76e90fab5407d9018fdd9792a6da.jpg" alt="photoOwner"/>
                        <span>Admin</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default ApartmentContent;