import {GET_USER, SET_CURRENT_PAGE, SET_REALTORS} from "../common/constants";

const initState = {
    realtors: [],
    pageSize: 5,
    totalRealtorsCount: 20,
    currentPage: 2
};

export default (state = initState, action) => {
    switch(action.type) {
        case SET_REALTORS: {
            return {...state, realtors: action.realtors}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        default:
            return state
    }
}

export const setRealtorsAC = (realtors) => ({type: SET_REALTORS, realtors})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})