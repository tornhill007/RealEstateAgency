import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";
import {required} from "../../utils/validator";
import {connect} from "react-redux";
import {login} from "../../reducers/authReducer";
import {Redirect} from "react-router-dom";
import classes from './Login.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons'


const LoginForm = (props) => {
    return (

        <div className={classes.container}>
            <div className={classes.wrap}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxd34nv00X_fav1iySEezHQCEqRgYDM16tyCM96R2am7AxHknV&s" alt="men"/>
                <form onSubmit={props.handleSubmit}>
                    <div className={classes.wrapperInput}>

                        <div className={classes.iconContainer}>
                            <div className={classes.iconWrapper}>
                                <FontAwesomeIcon icon={faUser} className={classes.icon}/>
                            </div>
                            <Field placeholder={"Email"} className={classes.input} name={"email"} validate={[required]}
                                   component={Input}/>
                        </div>
                        <div className={classes.iconContainer}>
                            <div className={classes.iconWrapper}>
                                <FontAwesomeIcon icon={faLock} className={classes.icon}/>
                            </div>
                            <Field placeholder={"Password"} className={classes.input} name={"password"}
                                   type={"password"}
                                   validate={[required]}
                                   component={Input}/>
                        </div>
                        <div>
                            <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
                        </div>
                        <div>
                            <button className={classes.submit}>Log in</button>
                        </div>
                        <a href="#">Forgot password?</a>
                    </div>
                </form>
            </div>
        </div>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/home"}/>
    }
    return <div className={classes.wrapperLogin}>
        <div className={classes.wrapperPage1}>
        <h1 className={classes.name}>Login</h1>

        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default Login;
// export default connect(mapStateToProps, {login} )(Login);