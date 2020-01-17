import React from 'react';
import classes from './Complex.module.css';
import {Field} from "redux-form";
import {Input} from "../../../common/FormsControl/FormsControl";

const ComplexForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <h3>Apartment complex:</h3>
        <div className={classes.wrap}>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"west"} component={Input} className={classes.item1}/> AC West
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"family"} component={Input}/> AC Family comfort
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"pearl"} component={Input}/> AC Pearl of Podillya
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"greens"} component={Input}/> AC Green's
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"premier"} component={Input}/> AC Premier Tower
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"dawn"} component={Input}/> AC Dawn
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"academic"} component={Input}/> Academic residential district
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"avalon"} component={Input}/> AC Avalon 5
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"teachers"} component={Input}/> AC Teacher's
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"comfort"} component={Input}/> AC Comfort
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"turkish"} component={Input}/> AC Turkish City
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"rainbow"} component={Input}/> AC Rainbow
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"sofia"} component={Input}/> AC Sofia
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"prestige"} component={Input}/> AC Prestige Hall
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"riviera"} component={Input}/> AC Riviera
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"waterfront"} component={Input}/> AC Quay waterfront
            </div>
            <div className={classes.item}>
                <Field type={"checkbox"} name={"residence"} component={Input}/> AC Residence
            </div>
        </div>
        <div className={classes.submitWrap}>
            <button className={classes.submit}>Ok</button>
        </div>
    </form>
};

export default ComplexForm;
