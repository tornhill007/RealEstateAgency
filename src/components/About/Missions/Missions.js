import React from 'react';
import classes from './Missions.module.css';

const Missions = () => {
    return <div className={classes.wrapper}>
        <h1 className={classes.head}>Mission</h1>
        <div className={classes.item}>
            <p>Our mission is to offer the real estate market a new quality model of customer service. Introduce everyone to the industry's opportunities and prospects.</p>
        </div>
        <div className={classes.item}>
            <p>To justify the hope, one must learn to see the individual in the Client. After all, in the real estate field, each has its own "philosophy": it is a life achievement, harmony in the family or a profitable investment. But for all, without exception, real estate is a great value. And only by truly taking care of the wishes and needs of the Clients, will we make their dream come true.</p>
        </div>
    </div>
};

export default Missions;