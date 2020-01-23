import React from 'react';
import {connect} from "react-redux";
import Reviews from "./Reviews";
import {addNewPostActionCreator, onPostChangeActionCreator} from "../../reducers/profileReducer";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        isAuth: state.loginPage.isAuth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(onPostChangeActionCreator(text));
        },
        addPost: () => {
            dispatch(addNewPostActionCreator());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);