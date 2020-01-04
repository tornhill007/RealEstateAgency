import { GET_USER } from "../common/constants";

const initState = {
    user: null,
    auth: false
};

export default (state = initState, action) => {
    switch(action.type) {
        case GET_USER:
            return {
                user: action.payload
            };
        default:
            return state
    }
}