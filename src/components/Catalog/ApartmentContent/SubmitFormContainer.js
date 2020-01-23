import React from 'react';
import {connect} from "react-redux";
import SubmitForm from "./SubmitForm";

const mapStateToProps = (state) => {
    return {
        isAuth: state.loginPage.isAuth
    }
};


export default connect(mapStateToProps)(SubmitForm);