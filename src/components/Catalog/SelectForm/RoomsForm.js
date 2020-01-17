import React from 'react';
import classes from './Rooms.module.css';
import {Field} from "redux-form";
import {Input} from "../../../common/FormsControl/FormsControl";

const RoomsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <h3>Number of rooms:</h3>
        <div className={classes.wrap}>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"room1"} component={Input}/> 1+ studio
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"room2"} component={Input}/> 2
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"room3"} component={Input}/> 3
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"room4"} component={Input}/> 4
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"room5"} component={Input}/> 5
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"room6"} component={Input}/> 6
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"Penthouse"} component={Input}/> Penthouse
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"House"} component={Input}/> House
            </div>
        </div>
        <div className={classes.submitWrap}>
            <button className={classes.submit}>Ok</button>
        </div>
    </form>
};
export default RoomsForm;
