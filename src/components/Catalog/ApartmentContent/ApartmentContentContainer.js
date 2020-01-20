import React from 'react';
import {connect} from "react-redux";
import {setCurrentPageAC, setRealtorsAC} from "../../../reducers/RealtorsReducer";

import SelectForm from "../SelectForm/SelectForm";
import {setApartmentAC} from "../../../reducers/ApartmentsReducer";
import {ApartmentContent} from "./ApartmentContent";
import {setContentAC} from "../../../reducers/ApartmentContentReducer";

let mapStateToProps = (state) => {
    return {
        apartmentContent: state.contentPage.apartmentContent
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setContent: (apartmentContent) => {
            dispatch(setContentAC(apartmentContent));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentContent);