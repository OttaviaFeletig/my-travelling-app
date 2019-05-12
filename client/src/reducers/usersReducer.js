import {
    GET_ERRORS,
    USER_LOADING,
    SET_CURRENT_USER,
    ADD_FAVORITE_ITINERARY
} from '../actions/usersAction';

const isEmpty = require('is-empty');

const initState = {
    isAuthenticated: false,
    user: {},
    loading: false
};

const usersReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_ERRORS:
            return action.payload;
        case USER_LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                // isAuthenticated: true,
                user: action.payload
            };
        case ADD_FAVORITE_ITINERARY:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default usersReducer;