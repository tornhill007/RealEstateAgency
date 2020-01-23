import React from 'react';
import {Field} from "redux-form";
import classes from './SubmitForm.module.css';
import {required} from "../../../utils/validator";
import {Input} from "../../../common/FormsControl/FormsControl";


const SubmitForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={classes.container}>
        <div className={classes.wrapperHead}>
            <span>-FILL OUT AN APPLICATION-</span>
        </div>
        <div className={classes.wrapperList}>
            <div className={classes.itemLists}>
                <label htmlFor="Name">*Name</label>
                <Field name={"NameUser"} validate={[required]}
                       component={Input} className={classes.itemInput}/>
            </div>
            <div className={classes.itemLists}>
                <label htmlFor="phoneNumber">*Phone number</label>
                <Field name={"PhoneUser"} validate={[required]}
                       component={Input} className={classes.itemInput}/>
            </div>
            <div className={classes.itemLists}>
                <label htmlFor="email">*Email</label>
                <Field name={"EmailUser"} validate={[required]}
                       component={Input} className={classes.itemInput}/>
            </div>

            <div className={classes.itemBtn}>
                {props.isAuth ? <button className={classes.submit}>Send request</button> : <div className={classes.text}><span>You should login in order to add review</span></div>}
            </div>
        </div>
    </form>
};

export default SubmitForm;
