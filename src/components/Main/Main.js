import React, {Component} from "react";
import Slider from "react-animated-slider";
import 'react-animated-slider/build/horizontal.css';
// import "normalize.css/normalize.css";
// import "./slider-animations.css";
import Carousel from 'react-bootstrap/Carousel';
import {useState} from 'react';
import classes from './Main.module.css';


function Main() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    const classItem = `${classes.item} d-block w-100`;

    return (
        <div className={classes.wrapperBlock}>
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} className={classes.wrapper}>
            <Carousel.Item>
                <img
                    className={classItem}
                    src="https://coolhouses.ru/files/images/4.2014/shikarnaya-kvartira-s-shikarnyim-vidom-v-tsentre-londona-6.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className={classes.itemText}>
                        <h1>For Rent</h1>
                        <button>Click here</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={classItem}
                    src="https://cdn.homedsgn.com/wp-content/uploads/2016/07/Suite-for-ten-28-1150x765.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className={classes.itemText}>
                        <h1>For Buying</h1>
                        <button>Click here</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={classItem}
                    src="https://cdn.homedsgn.com/wp-content/uploads/2012/03/Loft-Apartment-04-1150x765.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <div className={classes.itemText}>
                        <h1>For Selling</h1>
                        <button>Click here</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
    // return (
    //     <div>
    //         <header>
    //             <h1 onClick={() => {this.props.getUser()}}>Welcome to React</h1>
    //             <p>{this.props.user !== null ? this.props.user.name : ''}</p>
    //         </header>
    //     </div>
    // );
}


export default Main;