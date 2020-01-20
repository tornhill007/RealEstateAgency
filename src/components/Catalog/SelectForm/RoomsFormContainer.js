import {connect} from "react-redux";
import { setApartmentAC,  } from "../../../reducers/ApartmentsReducer";
import RoomsForm from "./RoomsForm";
import {setFilterRooms} from "../../../reducers/FilterReducer";

let mapStateToProps = (state) => {
    return {
        apartments: state.apartmentsPage.apartments,
        filterRooms: state.filterPage.rooms,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setApartments: (apartments) => {
            dispatch(setApartmentAC(apartments));
        },
        setFilterRooms: (filterRooms) => {
             dispatch(setFilterRooms(filterRooms))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomsForm);