import {connect} from "react-redux";
import { setApartmentAC,  } from "../../reducers/ApartmentsReducer";
import Catalog from "./Catalog";
import {setFilterDistrict, setFilterRooms} from "../../reducers/FilterReducer";

let mapStateToProps = (state) => {
    return {
        apartments: state.apartmentsPage.apartments,
        filterRooms: state.filterPage.rooms,
        filterDistrict: state.filterPage.district,
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);