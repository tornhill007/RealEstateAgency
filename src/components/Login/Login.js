import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";
import {required} from "../../utils/validator";
import {connect} from "react-redux";
import {login} from "../../reducers/authReducer";
import {Redirect, useHistory} from "react-router-dom";
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
    let history = useHistory();
    let redirect = false;
    const onSubmit = (formData) => {
        if(localStorage.getItem ("usersArray") != null) {
            var usersArray = JSON.parse (localStorage.getItem ("usersArray"));
        }
        else {
            var usersArray = [];
        }
        let user = usersArray.filter(item => item.email[0] == formData.email && item.password == formData.password).pop();
       // localStorage.setItem("usersArray", JSON.stringify(usersArray));
        console.log(user);

        localStorage.setItem("user", JSON.stringify(user));

        if(user === undefined) {
            alert('Email of password is not correctly')
        } else {
            // redirect = true;
            //history.push("/");
            window.location.href = '/';
        }

    };

    return <div className={classes.wrapperLogin}>
        <div className={classes.wrapperPage1}>
        <h1 className={classes.name}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
        {redirect && <Redirect to="/" />}
    </div>
};



export default Login;
// export default connect(mapStateToProps, {login} )(Login);