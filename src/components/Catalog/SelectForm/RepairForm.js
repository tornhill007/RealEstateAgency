import React from 'react';
import classes from './Repair.module.css';
import {Field} from "redux-form";
import {Input} from "../../../common/FormsControl/FormsControl";

const RepairForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <h3>Repair:</h3>
        <div className={classes.wrap}>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"firstRent"} component={Input}/> First Rent
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"young"} component={Input}/> 1-2 years
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"middle"} component={Input}/> 3-5 years
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"old"} component={Input}/> 5 Years and Older
            </div>
        </div>
        <div className={classes.submitWrap}>
            <button className={classes.submit}>Ok</button>
        </div>
    </form>
};

export default RepairForm;
