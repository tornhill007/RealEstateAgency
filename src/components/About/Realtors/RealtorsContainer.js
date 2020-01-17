import React from 'react';
import classes from './Realtors.module.css';
import {connect} from "react-redux";
import {setCurrentPageAC, setRealtorsAC} from "../../../reducers/RealtorsReducer";
import Realtors from "./Realtors";

let mapStateToProps = (state) => {
    return {
        realtors: state.realtorsPage.realtors,
        pageSize: state.realtorsPage.pageSize,
        totalRealtorsCount: state.realtorsPage.totalRealtorsCount,
        currentPage: state.realtorsPage.currentPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setRealtors: (realtors) => {
            dispatch(setRealtorsAC(realtors));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Realtors);