import React from 'react';
import { connect } from "react-redux";

import { setApartmentAC } from "../../../reducers/ApartmentsReducer";
import Apartments from "./Apartments";

let mapStateToProps = (state) => {
    return {
        apartments: state.apartmentsPage.apartments,
        pageSize: state.realtorsPage.pageSize,
        totalRealtorsCount: state.realtorsPage.totalRealtorsCount,
        currentPage: state.realtorsPage.currentPage,
        sort: state.apartmentsPage.sort,
        filterRooms: state.filterPage.rooms,
        priceFilter: {priceFrom: state.filterPage.priceFrom, priceTo: state.filterPage.priceTo},
        areaFilter: { areaFrom: state.filterPage.areaFrom, areaTo: state.filterPage.areaTo}
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

export default connect(mapStateToProps, mapDispatchToProps)(Apartments);