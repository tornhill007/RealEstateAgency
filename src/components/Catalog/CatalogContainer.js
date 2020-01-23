import {connect} from "react-redux";
import { setApartmentAC,  } from "../../reducers/ApartmentsReducer";
import Catalog from "./Catalog";
import { setFilterDistrict, setFilterRooms, setFilterArea, setFilterPrice } from "../../reducers/FilterReducer";

let mapStateToProps = (state) => {
    return {
        apartments: state.apartmentsPage.apartments,
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
        setFilterRooms: (filterRooms) => {
            dispatch(setFilterRooms(filterRooms))
        },
        setFilterDistrict: (filterDistrict) => {
            dispatch(setFilterDistrict(filterDistrict))
        },
        setFilterArea: (filterArea) => {
            dispatch(setFilterArea(filterArea))
        },
        setFilterPrice: (filterPrice) => {
            dispatch(setFilterPrice(filterPrice))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);