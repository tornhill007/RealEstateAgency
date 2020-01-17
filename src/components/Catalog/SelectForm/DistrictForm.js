import React from 'react';
import classes from './District.module.css';
import {Field} from "redux-form";
import {Input} from "../../../common/FormsControl/FormsControl";

const DistrictForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <h3>District:</h3>
        <div className={classes.wrap}>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"zamostya"} component={Input}/> Zamostyansk district
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"leninsky"} component={Input}/> Leninsky district
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"oldTown"} component={Input}/> Old Town District
            </div>
        </div>
        <div className={classes.submitWrap}>
            <button className={classes.submit}>Ok</button>
        </div>
    </form>
};

export default DistrictForm;
