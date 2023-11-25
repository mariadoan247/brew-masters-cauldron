import { SET_RACES } from "../actions/types";

const initialState = { // Empty array to start from
  races: [],
  loading: false
};

function raceReducer(state = initialState, action) {
  switch (action.type) {
    case SET_RACES: // listen for actions of type SET_RACES
      return { // if SET_RACES found, update state
        ...state,
        races: action.payload // replace races array with payload from SET_RACES
      };
    default:
      return state;
  }
}

export default raceReducer;
