import { combineReducers } from "redux";
import contestReducer from "./Reducers/ContestsReducer";

export const rootReducer = combineReducers({
  contests: contestReducer,
});
