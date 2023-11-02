import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import notesReducer from "./notesReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  notes: notesReducer
});
