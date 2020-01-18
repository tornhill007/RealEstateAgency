import React from 'react';
import {NavLink} from "react-router-dom";
import arrayContent from "../../../common/arrayContent";
import consts from "../../About/Jobs/JobsPosition/consts";
import classes from './ApartmentContent.module.css';

const ApartmentContent = (props) => {
    // if (props.apartmentContent.length === 0) {
    //     props.setContent( arrayContent
    //     )
    // }

    let pathname = props.location.pathname.substr(1).split('/')[1];
    console.log(pathname);
    try {
        var content = arrayContent[pathname-1];
    } catch (e) {
        var content = 'ERROR 404';
    }


    return <div className={classes.wrapper}>
        <div>
            <span>Return to catalog</span>
            <span></span>
        </div>
    </div>
};

export default ApartmentContent;