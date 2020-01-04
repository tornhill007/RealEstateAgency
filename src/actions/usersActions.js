import { GET_USER } from "../common/constants";

export const getUser = () => dispatch => {
    dispatch({
        type: GET_USER,
        user: {'name': 'Test', 'lastName': 'Last Name'}
    });
};