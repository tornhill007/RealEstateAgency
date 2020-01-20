import React from 'react';
import {connect} from "react-redux";
import {setCurrentPageAC, setRealtorsAC} from "../../../reducers/RealtorsReducer";

import SelectForm from "../SelectForm/SelectForm";
import {setApartmentAC} from "../../../reducers/ApartmentsReducer";
import Apartments from "./Apartments";

let mapStateToProps = (state) => {
    return {
        apartments: state.apartmentsPage.apartments,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setApartments: (apartments) => {
            dispatch(setApartmentAC(apartments));
        },
        // setCurrentPage: (pageNumber) => {
        //     dispatch(setCurrentPageAC(pageNumber))
        // }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectForm);