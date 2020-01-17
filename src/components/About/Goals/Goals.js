import React from 'react';
import classes from './Goals.module.css';

const Goals = () => {

    return <div className={classes.wrapper}>
        <h1 className={classes.head}>Goals</h1>
        <div className={classes.item}>
            <p>We strive to accumulate the professionalism and capabilities of the whole team to meet the client's expectations, to give him what he came to us for.</p>
        </div>
        <div className={classes.item}>
            <p>It is important for us to see in everyone not just a regular client, but an <span className={classes.itemText}>individuality with unique desires</span>.</p>
        </div>
        <div className={classes.item}>
            <p className={classes.item1}>Purpose of our agency is to be the one company that you would gladly recommend to your loved ones and friends.</p>
        </div>
        <div className={classes.imgWrap}>
        <img src="https://parklane.ua/sites/parklane.ua/files/inline-images/juridicheskoe-soprovozhdenie-sdelki-s-kommercheskoj-nedvizhimostju_0.jpg" alt=""/>
        </div>
    </div>
};

export default Goals;