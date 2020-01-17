import React from 'react';
import classes from './Area.module.css';
import {Field} from "redux-form";

const AreaForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <h3>Area in m2:</h3>
        <ul className={classes.wrapperList}>
            <li className={classes.itemList}>
                <label htmlFor="areaFrom">from</label>
                <Field placeholder={"From"} name={"areaFrom"} component="input" className={classes.itemInput}/>
            </li>
            <li className={classes.itemLists}>
                <label htmlFor="areaTo">to</label>
                <Field placeholder={"To"} name={"areaTo"} component="input" className={classes.itemInput}/>
            </li>
            <li className={classes.itemLists}>
                <button className={classes.submit}>Ok</button>
            </li>
        </ul>
    </form>
};

export default AreaForm;
