import {Link, NavLink} from "react-router-dom";
import React from 'react';
import classes from './Header.module.css';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Header from "./Header";
import {connect} from "react-redux";
import {logOut} from "../../reducers/userReducer";


const mapStateToProps = (state) => ({
    user: state.loginPage.user,
    isAuth: state.loginPage.isAuth
});

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logOut());
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);