import { combineReducers } from "redux";
import historyReducer from "./historyReducer";
import projectReducer from "./projectReducer";
export default combineReducers({
  history: historyReducer,
  project: projectReducer
});
