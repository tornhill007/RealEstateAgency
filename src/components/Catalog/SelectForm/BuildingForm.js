import React from 'react';
import classes from './Building.module.css';
import {Field} from "redux-form";
import {Input} from "../../../common/FormsControl/FormsControl";

const BuildingForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <h3>House building:</h3>
        <div className={classes.wrap}>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"newBuilding"} component={Input}/> New building
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"khrushchev"} component={Input}/> Khrushchev
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"stalinka"} component={Input}/> Stalinka
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"royal"} component={Input}/> Royal House
            </div>
        </div>
        <div className={classes.submitWrap}>
            <button className={classes.submit}>Ok</button>
        </div>
    </form>
};

export default BuildingForm;
