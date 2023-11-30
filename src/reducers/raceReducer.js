import { SET_RACES, SET_RACE_NAMES } from "../actions/types";

const initialState = { // Empty array to start from
  races: [],
  raceNames: [],
  loading: false
};

function raceReducer(state = initialState, action) {
  switch (action.type) {
    case SET_RACES: // listen for actions of type SET_RACES
      return { // if SET_RACES found, update state
        ...state,
        races: action.payload // replace races array with payload from SET_RACES
      };
    case SET_RACE_NAMES: // listen for actions of type SET_RACE_NAMES
      return { // if SET_RACE_NAMES found, update state
        ...state,
        raceNames: action.payload // replace raceNames array with payload from SET_RACE_NAMES
      }
    default:
      return state;
  }
}

export default raceReducer;
