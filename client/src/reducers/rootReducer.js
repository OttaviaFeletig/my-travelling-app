import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";

//combining different reducers into one rootReducer
const rootReducer = combineReducers({cities: citiesReducer});

export default rootReducer;