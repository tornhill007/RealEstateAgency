import {connect} from "react-redux";
import App from "./app";
import {addNewPostActionCreator, onPostChangeActionCreator} from "./reducers/profileReducer";
import {logIn, logOut} from "./reducers/userReducer";

const mapStateToProps = (state) => {
    return {
        user: state.loginPage.user,
        isAuth: state.loginPage.isAuth
    }
};

const mapDispatchToProps = (dispatch) => {

    // if(localStorage.getItem ("usersArray") != null) {
    //     let user = JSON.parse (localStorage.getItem ("user"));
    //     if(user !== {})
    //         dispatch(logIn(user));
    // }
    return {
        logIn: (user) => {
            dispatch(logIn(user));
        },
        logOut: () => {
            dispatch(logOut());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);