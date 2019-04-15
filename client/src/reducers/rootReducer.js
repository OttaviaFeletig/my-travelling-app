import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itinerariesReducer";
import usersReducer from './usersReducer';
import commentsReducer from './commentsReducer';

//combining different reducers into one rootReducer
const rootReducer = combineReducers({cities: citiesReducer, itineraries: itinerariesReducer, user: usersReducer, comments: commentsReducer});

export default rootReducer;