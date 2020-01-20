import {GET_USER, SET_APARTMENTS, SET_CONTENT, SET_CURRENT_PAGE, SET_REALTORS} from "../common/constants";

const initState = {
    apartmentContent: [],
};

export default (state = initState, action) => {
    switch(action.type) {
        case SET_CONTENT: {
            return {...state, apartmentContent: action.apartmentContent}
        }
        default:
            return state
    }
}

export const setContentAC = (apartmentContent) => ({type: SET_CONTENT, apartmentContent});