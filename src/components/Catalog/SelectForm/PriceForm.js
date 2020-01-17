import React from 'react';
import classes from './PriceForm.module.css';
import {Field} from "redux-form";

const PriceForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <h3>Price:</h3>
        <ul className={classes.wrapperList}>
            <li className={classes.itemList}>
                <label htmlFor="filterFrom">from</label>
                <Field placeholder={"From"} name={"priceFrom"} component="input" className={classes.itemInput}/>
            </li>
            <li className={classes.itemLists}>
                <label htmlFor="filterTo">to</label>
                <Field placeholder={"To"} name={"priceTo"} component="input" className={classes.itemInput}/>
            </li>
            <li className={classes.itemLists}>
                <button className={classes.submit}>Ok</button>
            </li>
        </ul>
    </form>
};

export default PriceForm;
