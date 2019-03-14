import { 
    FETCH_CITIES_BEGIN,
    FETCH_CITIES_SUCCESS,
    FETCH_CITIES_FAILURE 
} from '../actions/citiesAction';

const initState = {
    cities: [],
    loading: false,
    error: null
}
//changing the state according to what action the reducer receives
const citiesReducer = (state = initState, action) => {
    switch (action.type){
        case FETCH_CITIES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_CITIES_SUCCESS: 
            return {
                ...state,
                loading: false,
                cities: action.payload.items
            };
        case FETCH_CITIES_FAILURE:
            return {
                ...state,
                loading: false,
                cities: [],
                error: action.payload.error
            };
        default:
            return state;
    }
}

export default citiesReducer