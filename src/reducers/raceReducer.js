import { SET_RACES } from "../actions/types";

const initialState = {
  races: [],
  loading: false
};

function raceReducer(state = initialState, action) {
  switch (action.type) {
    case SET_RACES:
      return {
        ...state,
        races: action.payload
      };
    default:
      return state;
  }
}

export default raceReducer;
