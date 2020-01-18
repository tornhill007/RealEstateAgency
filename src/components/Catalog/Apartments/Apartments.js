import React from 'react';
import classes from './Apartments.module.css';
import {NavLink} from "react-router-dom";

const Apartments = (props) => {
    if (props.apartments.length === 0) {
        props.setApartments([
                {
                    id: 1,
                    photoUrl: "https://www.expodisplayservice.com/wp-content/uploads/2017/01/RE5X3-005-1.jpg",
                    desc: "For rent for the first time! 1-room apartment (64 m2) on Shchorsa 34. Renovated, 2 balconies, dishwasher, 1 bathroom ...",
                    location: "Schorsa street 34",
                    district: "Leninsky district",
                    price: "1000",
                    roomNumber: "one-room",
                    area: "50",
                    isRent: true
                },
                {
                    id: 2,
                    photoUrl: "http://d-borisov.com/assets/components/phpthumbof/cache/The_Moonway_apartment_11.374c09a6b20ea1a7275093ad015984a9.jpg",
                    desc: "For rent for the first time! 1-room apartment (64 m2) on Shchorsa 34. Renovated, 2 balconies, dishwasher, 1 bathroom ...",
                    location: "Schorsa street 34",
                    district: "Leninsky district",
                    price: "1000",
                    roomNumber: "one-room",
                    area: "50",
                    isRent: true
                },
                {
                    id: 3,
                    photoUrl: "https://www.expodisplayservice.com/wp-content/uploads/2017/01/RE5X3-005-1.jpg",
                    desc: "For rent for the first time! 1-room apartment (64 m2) on Shchorsa 34. Renovated, 2 balconies, dishwasher, 1 bathroom ...",
                    location: "Schorsa street 34",
                    district: "Leninsky district",
                    price: "1000",
                    roomNumber: "one-room",
                    area: "50",
                    isRent: true
                },
                {
                    id: 4,
                    photoUrl: "https://www.expodisplayservice.com/wp-content/uploads/2017/01/RE5X3-005-1.jpg",
                    desc: "For rent for the first time! 1-room apartment (64 m2) on Shchorsa 34. Renovated, 2 balconies, dishwasher, 1 bathroom ...",
                    location: "Schorsa street 34",
                    district: "Leninsky district",
                    price: "1000",
                    roomNumber: "one-room",
                    area: "50",
                    isRent: true
                },
                {
                    id: 5,
                    photoUrl: "https://www.expodisplayservice.com/wp-content/uploads/2017/01/RE5X3-005-1.jpg",
                    desc: "For rent for the first time! 1-room apartment (64 m2) on Shchorsa 34. Renovated, 2 balconies, dishwasher, 1 bathroom ...",
                    location: "Schorsa street 34",
                    district: "Leninsky district",
                    price: "1000",
                    roomNumber: "one-room",
                    area: "50",
                    isRent: false
                },
                {
                    id: 6,
                    photoUrl: "https://www.expodisplayservice.com/wp-content/uploads/2017/01/RE5X3-005-1.jpg",
                    desc: "For rent for the first time! 1-room apartment (64 m2) on Shchorsa 34. Renovated, 2 balconies, dishwasher, 1 bathroom ...",
                    location: "Schorsa street 34",
                    district: "Leninsky district",
                    price: "1000",
                    roomNumber: "one-room",
                    area: "50",
                    isRent: false
                },
                {
                    id: 7,
                    photoUrl: "https://www.expodisplayservice.com/wp-content/uploads/2017/01/RE5X3-005-1.jpg",
                    desc: "For rent for the first time! 1-room apartment (64 m2) on Shchorsa 34. Renovated, 2 balconies, dishwasher, 1 bathroom ...",
                    location: "Schorsa street 34",
                    district: "Leninsky district",
                    price: "1000",
                    roomNumber: "one-room",
                    area: "50",
                    isRent: false
                },
                {
                    id: 8,
                    photoUrl: "https://www.expodisplayservice.com/wp-content/uploads/2017/01/RE5X3-005-1.jpg",
                    desc: "For rent for the first time! 1-room apartment (64 m2) on Shchorsa 34. Renovated, 2 balconies, dishwasher, 1 bathroom ...",
                    location: "Schorsa street 34",
                    district: "Leninsky district",
                    price: "1000",
                    roomNumber: "one-room",
                    area: "50",
                    isRent: false
                },
                {
                    id: 9,
                    photoUrl: "https://www.expodisplayservice.com/wp-content/uploads/2017/01/RE5X3-005-1.jpg",
                    desc: "For rent for the first time! 1-room apartment (64 m2) on Shchorsa 34. Renovated, 2 balconies, dishwasher, 1 bathroom ...",
                    location: "Schorsa street 34",
                    district: "Leninsky district",
                    price: "1000",
                    roomNumber: "one-room",
                    area: "50",
                    isRent: false
                },
                {
                    id: 10,
                    photoUrl: "https://www.expodisplayservice.com/wp-content/uploads/2017/01/RE5X3-005-1.jpg",
                    desc: "For rent for the first time! 1-room apartment (64 m2) on Shchorsa 34. Renovated, 2 balconies, dishwasher, 1 bathroom ...",
                    location: "Schorsa street 34",
                    district: "Leninsky district",
                    price: "1000",
                    roomNumber: "one-room",
                    area: "50",
                    isRent: false
                },
                {
                    id: 11,
                    photoUrl: "https://www.expodisplayservice.com/wp-content/uploads/2017/01/RE5X3-005-1.jpg",
                    desc: "For rent for the first time! 1-room apartment (64 m2) on Shchorsa 34. Renovated, 2 balconies, dishwasher, 1 bathroom ...",
                    location: "Schorsa street 34",
                    district: "Leninsky district",
                    price: "1000",
                    roomNumber: "one-room",
                    area: "50",
                    isRent: true
                }
            ]
        )
    }


    return <div>
        <div className={classes.wrapper}>
            {
                props.apartments.map(u => u.isRent ? <NavLink to='/main' key={u.id} className={classes.wrapperBlock}>
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
                            {u.price}
                        </span>
                        <span className={classes.itemArea}>
                            {u.area} m<sup>2</sup>
                        </span>
                        <span className={classes.itemView}>
                            View apartment1
                        </span>
                    </div>
                </NavLink> : null )
            }

        </div>

    </div>
};

export default Apartments;