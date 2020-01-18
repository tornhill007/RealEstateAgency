import React from 'react';
import classes from './Apartments.module.css';
import {NavLink} from "react-router-dom";
import arrayContent from "../../../common/arrayContent";

const Apartments = (props) => {
    if (props.apartments.length === 0) {
        props.setApartments( arrayContent
        )
    }


    return <div>
        <div className={classes.wrapper}>
            {
                props.apartments.map(u => u.isRent ? <NavLink to={'/catalog/'+u.id}  key={u.id} className={classes.wrapperBlock}>
                    <div className={classes.imgWrap}>
                        <img src={u.photoUrl} className={classes.img} alt=""/>
                    </div>
                    <div className={classes.wrapContent}>
                        <div className={classes.wrapContentBlock}>
                            <span className={classes.itemDesc}>
                                {u.desc}
                            </span>
                            <div className={classes.itemContainer}>
                            <span className={classes.itemWrap}>
                                <a href="#" className={classes.itemLink}>{u.location}</a>
                            </span>
                                <span className={classes.itemDisc}>
                                {u.district}
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.wrapContentAdd}>
                        <span className={classes.itemUsd}>
                            {u.price}
                            <text className={classes.usd}>USD</text>
                        </span>
                        <span className={classes.itemRoom}>
                            {u.roomNumber}
                        </span>
                        <span className={classes.itemArea}>
                            {u.area} m<sup>2</sup>
                        </span>
                        <span className={classes.itemView}>
                            View apartment
                        </span>
                    </div>
                </NavLink> : null )
            }

        </div>

    </div>
};

export default Apartments;