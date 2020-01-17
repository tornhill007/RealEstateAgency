import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";
import {required} from "../../utils/validator";
import {connect} from "react-redux";
import {login} from "../../reducers/authReducer";
import {Redirect} from "react-router-dom";
import classes from "./Register.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock, faUser} from "@fortawesome/free-solid-svg-icons";


const RegisterForm = (props) => {
    return (

        <div className={classes.container}>
            <img src="/men.png" alt="men"/>
            <form onSubmit={props.handleSubmit}>
                <div className={classes.wrapperInput}>

                    <div className={classes.iconContainer}>
                        <div className={classes.iconWrapper}>
                            <FontAwesomeIcon icon={faUser} className={classes.icon} />
                        </div>
                        <Field placeholder={"Email"} className={classes.input} name={"email"} validate={[required]}
                               component={Input}/>
                    </div>
                    <div className={classes.iconContainer}>
                        <div className={classes.iconWrapper}>
                            <FontAwesomeIcon icon={faLock} className={classes.icon} />
                        </div>
                        <Field placeholder={"Name"} className={classes.input} name={"name"}
                               validate={[required]}
                               component={Input}/>
                    </div>
                    <div className={classes.iconContainer}>
                        <div className={classes.iconWrapper}>
                            <FontAwesomeIcon icon={faLock} className={classes.icon} />
                        </div>
                        <Field placeholder={"Surname"} className={classes.input} name={"surname"}
                               validate={[required]}
                               component={Input}/>
                    </div>
                    <div className={classes.iconContainer}>
                        <div className={classes.iconWrapper}>
                            <FontAwesomeIcon icon={faLock} className={classes.icon} />
                        </div>
                        <Field placeholder={"Password"} className={classes.input} name={"password"} type={"password"}
                               validate={[required]}
                               component={Input}/>
                    </div>
                    <div className={classes.iconContainer}>
                        <div className={classes.iconWrapper}>
                            <FontAwesomeIcon icon={faLock} className={classes.icon} />
                        </div>
                        <Field placeholder={"Repeat password"} className={classes.input} name={"repatPassword"} type={"password"}
                               validate={[required]}
                               component={Input}/>
                    </div>
                    <div>
                        <button className={classes.submit}>Log up</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

const RegisterReduxForm = reduxForm({form: 'register'})(RegisterForm)

const Register = (props) => {
    const onSubmit = (formData) => {
        // props.login(formData.email, formData.password, formData.rememberMe)
        console.log(formData);
    }

    return <div>
        <h1 className={classes.name}>Register</h1>
        <RegisterReduxForm onSubmit={onSubmit}/>
    </div>
};


export default Register;