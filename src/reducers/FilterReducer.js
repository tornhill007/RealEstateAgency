import {
    SET_APARTMENTS,
    SET_CURRENT_PAGE,
    SET_FILTER_AREA, SET_FILTER_BUILDING, SET_FILTER_COMPLEX, SET_FILTER_DISTRICT,
    SET_FILTER_PRICE, SET_FILTER_REPAIR,
    SET_FILTER_ROOMS,
    SET_SORT
} from "../common/constants";

const initState = {
    apartments: [],
    pageSize: 5,
    totalRealtorsCount: 20,
    currentPage: 1,
    sort: 'byDate',
    priceFrom: '',
    priceTo: '',
    areaFrom: '',
    areaTo: '',
    rooms: [],
    district: [],
    complex: [],
    building: [],
    repair: [],
};

export default (state = initState, action) => {
    switch(action.type) {
        case SET_APARTMENTS: {
            return {...state, apartments: action.apartments}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_FILTER_PRICE: {
            return {...state, priceFrom: action.priceFrom, priceTo: action.priceTo}
        }
        case SET_FILTER_ROOMS: {
            return {...state, rooms: action.filterRooms}
        }
        case SET_FILTER_AREA: {
            return {...state, areaFrom: action.areaFrom, areaTo: action.areaTo}
        }
        case SET_FILTER_DISTRICT: {
            return {...state, district: [...state.district, action.district]}
        }
        case SET_FILTER_COMPLEX: {
            return {...state, complex: [...state.complex, action.complex]}
        }
        case SET_FILTER_BUILDING: {
            return {...state, building: [...state.building, action.building]}
        }
        case SET_FILTER_REPAIR: {
            return {...state, repair: [...state.repair, action.repair]}
        }
        default:
            return state
    }
}

export const setFilterPrice = (filterPrice) => ({type: SET_FILTER_PRICE, filterPrice});
export const setFilterRooms = (filterRooms) => ({type: SET_FILTER_ROOMS, filterRooms});
export const setFilterArea = (filterArea) => ({type: SET_FILTER_AREA, filterArea});
export const setFilterDistrict = (filterDistrict) => ({type: SET_FILTER_DISTRICT, filterDistrict});
export const setFilterComplex = (filterComplex) => ({type: SET_FILTER_COMPLEX, filterComplex});
export const setFilterBuilding = (filterBuilding) => ({type: SET_FILTER_BUILDING, filterBuilding});
export const setFilterRepair = (filterRepair) => ({type: SET_FILTER_REPAIR, filterRepair});

export const setApartmentAC = (apartments) => ({type: SET_APARTMENTS, apartments});
export const setSort = (sort) => ({type: SET_SORT, sort});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});