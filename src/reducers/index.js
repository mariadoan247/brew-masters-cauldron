import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import notesReducer from "./notesReducer";
import raceReducer from "./raceReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  notes: notesReducer,
  races: raceReducer
});
