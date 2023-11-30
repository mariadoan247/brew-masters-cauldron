import { SET_BACKGROUNDS, SET_BACKGROUND_NAMES } from "../actions/types";

const initialState = {
  backgrounds: [],
  backgroundNames: [],
  loading: false
};

function backgroundReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BACKGROUNDS:
      return {
        ...state,
        backgrounds: action.payload
      };
    case SET_BACKGROUND_NAMES:
      return {
        ...state,
        backgroundNames: action.payload
      }
    default:
      return state;
  }
}

export default backgroundReducer;
