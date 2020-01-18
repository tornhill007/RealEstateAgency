import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import userReducer from "./userReducer";
import authReducer from "./authReducer";
import RealtorsReducer from "./RealtorsReducer";
import ApartmentsReducer from "./ApartmentsReducer";
import ApartmentContentReducer from "./ApartmentContentReducer";

export default combineReducers({

    user: userReducer,
    auth: authReducer,
    form: formReducer,
    realtorsPage: RealtorsReducer,
    apartmentsPage: ApartmentsReducer,
    contentPage: ApartmentContentReducer,

});