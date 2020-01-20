import {connect} from "react-redux";
import { setApartmentAC,  } from "../../../reducers/ApartmentsReducer";
import RoomsForm from "./RoomsForm";
import {setFilterDistrict, setFilterRooms} from "../../../reducers/FilterReducer";
import DistrictForm from "./DistrictForm";

let mapStateToProps = (state) => {
    return {
        apartments: state.apartmentsPage.apartments,
        filterDistrict: state.filterPage.district,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setApartments: (apartments) => {
            dispatch(setApartmentAC(apartments));
        },
        setFilterDistrict: (filterDistrict) => {
             dispatch(setFilterDistrict(filterDistrict))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DistrictForm);