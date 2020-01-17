import {Link, NavLink} from "react-router-dom";
import React from 'react';
import classes from './Header.module.css';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../reducers/authReducer";

class HeaderContainer extends React.Component {
     componentDidMount() {
    // this.props.getAuthUserData();
    //     axios.get(``)
    //         .then(response => {
    //             if(response.data.resultCode === 0) {
    //                 let {userId, login, email} = response.data.data
    //                 this.props.setAuthUserData(userId, email, login)
    //             }
    //         })
     }

    render() {
        return <Header {...this.props} />
    }
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {}) (HeaderContainer);