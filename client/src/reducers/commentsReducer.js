import { 
    GET_COMMENTS_ITINERARY,
    ADD_COMMENT, 
} from '../actions/commentsAction';

const initState = {
    comments: []
};

//changing the state according to what action the reducer receives
const commentsReducer = (state = initState, action) => {
    switch (action.type){
        case GET_COMMENTS_ITINERARY:
            return {
                ...state,
                comments: action.payload.data
            }
            
            
        // case FETCH_ITINERARIES_SUCCESS: 
        //     return {
        //         ...state,
        //         loading: false,
        //         itineraries: action.payload.items
        //     };
        // case FETCH_ITINERARIES_FAILURE:
        //     return {
        //         ...state,
        //         loading: false,
        //         itineraries: [],
        //         error: action.payload.error
        //     };
        default:
            return state;
    }
}

export default commentsReducer