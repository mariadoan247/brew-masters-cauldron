import { SET_BACKGROUNDS } from "../actions/types";

const initialState = {
  backgrounds: [],
  loading: false
};

function backgroundReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BACKGROUNDS:
      return {
        ...state,
        backgrounds: action.payload
      };
    default:
      return state;
  }
}

export default backgroundReducer;
