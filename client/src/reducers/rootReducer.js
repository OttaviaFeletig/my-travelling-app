import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itinerariesReducer";

//combining different reducers into one rootReducer
const rootReducer = combineReducers({cities: citiesReducer, itineraries: itinerariesReducer});

export default rootReducer;