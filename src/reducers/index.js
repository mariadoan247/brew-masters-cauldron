// combine individual reducers into single root reducer called "combineReducers" that creates the Redux store

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import notesReducer from "./notesReducer";
import raceReducer from "./raceReducer";
import classReducer from "./classReducer";
import backgroundReducer from "./backgroundReducer";
import spellReducer from "./spellReducer";
import itemReducer from "./itemReducer";
import featReducer from "./featReducer";
import monsterReducer from "./monsterReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  notes: notesReducer,
  races: raceReducer,
  classes: classReducer,
  backgrounds: backgroundReducer,
  spells: spellReducer,
  items: itemReducer,
  feats: featReducer,
  monsters: monsterReducer
});
