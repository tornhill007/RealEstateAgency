import {GET_USER, LOG_IN, LOG_OUT, SET_FILTER_PRICE, SET_FILTER_ROOMS} from "../common/constants";

const initState = {
    user: {},
    isAuth: false
};

export default (state = initState, action) => {
    switch(action.type) {
        case LOG_IN:
            return {
                ...state, user: action.user, isAuth: true
            };
        case LOG_OUT:
            return {
                ...state, user: {}, isAuth: false
            };
        default:
            return state
    }
}

export const logIn = (user) => ({type: LOG_IN, user});
export const logOut = () => ({type: LOG_OUT});