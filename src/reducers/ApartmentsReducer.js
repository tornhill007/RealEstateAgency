import { SET_APARTMENTS, SET_CURRENT_PAGE, SET_SORT} from "../common/constants";

const initState = {
    apartments: [],
    pageSize: 5,
    totalRealtorsCount: 20,
    currentPage: 1,
    sort: 'byDate'
};

export default (state = initState, action) => {
    switch(action.type) {
        case SET_APARTMENTS: {
            return {...state, apartments: action.apartments}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_SORT: {
            return {...state, sort: action.sort}
        }
        default:
            return state
    }
}

export const setApartmentAC = (apartments) => ({type: SET_APARTMENTS, apartments});
export const setSort = (sort) => ({type: SET_SORT, sort});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});