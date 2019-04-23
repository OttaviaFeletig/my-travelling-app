import { 
    GET_COMMENTS_ITINERARY,
    ADD_COMMENT, 
} from '../actions/commentsAction';

const initState = [];

//changing the state according to what action the reducer receives
const commentsReducer = (state = initState, action) => {
    switch (action.type){
        case GET_COMMENTS_ITINERARY:
            return action.payload
            
        case ADD_COMMENT: 
            return [action.payload, ...state]
        default:
            return state;
    }
}

export default commentsReducer