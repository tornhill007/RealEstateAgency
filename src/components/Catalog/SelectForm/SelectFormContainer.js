import {connect} from "react-redux";

import SelectForm from "../SelectForm/SelectForm";
import { setApartmentAC, setSort } from "../../../reducers/ApartmentsReducer";

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
        setSort: (sort) => {
             dispatch(setSort(sort))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectForm);