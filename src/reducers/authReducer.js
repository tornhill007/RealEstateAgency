import {authAPI} from "../common/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

// export const getAuthUserData = () => (dispath) => {
//     authAPI.me()
//         .then(response => {
//             if (response.data.resultCode === 0) {
//                 let {id, login, email} = response.data.data;
//                 dispath(setAuthUserData(id, email, login, true));
//             }
//         })
// }
//
// export const login = (email, password, rememberMe) => (dispath) => {
//     authAPI.login(email, password, rememberMe)
//         .then(response => {
//             if (response.data.resultCode === 0) {
//                 dispath(getAuthUserData())
//             }
//         })
// }
//
// export const logout = () => (dispath) => {
//     authAPI.logout()
//         .then(response => {
//             if (response.data.resultCode === 0) {
//                 dispath(getAuthUserData(null, null, null, false))
//             }
//         })
// }


export default authReducer;