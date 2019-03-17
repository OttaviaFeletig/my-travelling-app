import { 
    FETCH_ITINERARIES_BEGIN,
    FETCH_ITINERARIES_SUCCESS,
    FETCH_ITINERARIES_FAILURE 
} from '../actions/itineariesAction';

const initState = {
    itineraries: [],
    loading: false,
    error: null
}
//changing the state according to what action the reducer receives
const itinerariesReducer = (state = initState, action) => {
    switch (action.type){
        case FETCH_ITINERARIES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_ITINERARIES_SUCCESS: 
            return {
                ...state,
                loading: false,
                itineraries: action.payload.items
            };
        case FETCH_ITINERARIES_FAILURE:
            return {
                ...state,
                loading: false,
                itineraries: [],
                error: action.payload.error
            };
        default:
            return state;
    }
}

export default itinerariesReducer