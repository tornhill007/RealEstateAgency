import React from 'react';
import {Field} from "redux-form";
import classes from './SellForm.module.css';
import {ImageUpload} from "./imagesUpload/imagesUpload";
import {required} from "../../../utils/validator";
import {Input} from "../../../common/FormsControl/FormsControl";


const SellForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={classes.container}>
        <div className={classes.wrapperHead}>
            <span>-FILL OUT AN APPLICATION-</span>
        </div>
        <div className={classes.wrapperList}>
            <div className={classes.itemLists}>
                <label htmlFor="Name">*Name</label>
                <Field name={"SellName"} validate={[required]}
                       component={Input} className={classes.itemInput}/>
            </div>
            <div className={classes.itemLists}>
                <label htmlFor="phoneNumber">*Phone number</label>
                <Field name={"SellPhone"} validate={[required]}
                       component={Input} className={classes.itemInput}/>
            </div>
            <div className={classes.itemLists}>
                <label htmlFor="email">*Email</label>
                <Field name={"SellEmail"} validate={[required]}
                       component={Input} className={classes.itemInput}/>
            </div>
            <div className={classes.itemLists}>
                <label htmlFor="number of rooms">*Number of rooms</label>
                <Field  name={"SellRooms"} validate={[required]}
                        component={Input} className={classes.itemInput}/>
            </div>
            <div className={classes.itemLists}>
                <label htmlFor="Price">*Price USD</label>
                <Field name={"SellPrice"} validate={[required]}
                       component={Input} className={classes.itemInput}/>
            </div>
            <div className={classes.itemLists}>
                <label htmlFor="Address">*Address</label>
                <Field name={"SellAddress"} validate={[required]}
                       component={Input} className={classes.itemInput}/>
            </div>
            <div className={classes.itemLists}>
                <label htmlFor="Description">Description</label>
                <Field name={"SellDescription"} component="textarea" cols="50" rows="5" maxlength="500" className={classes.itemInput}/>
            </div>
            <div className={classes.itemLists}>
                <ImageUpload/>
            </div>
            <div className={classes.itemBtn}>
                {props.isAuth ? <button className={classes.submit}>Send request</button> : <div><span>You should login in order to add review</span></div>}
            </div>
        </div>
    </form>
};

export default SellForm;
