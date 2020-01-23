import React from 'react';
import {connect} from "react-redux";
import SellForm from "./SellForm";

const mapStateToProps = (state) => {
    return {
        isAuth: state.loginPage.isAuth
    }
};


export default connect(mapStateToProps)(SellForm);