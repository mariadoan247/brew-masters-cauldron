import { SET_CLASSES } from "../actions/types";

const initialState = {
  classes: [],
  loading: false
};

function classReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CLASSES:
      return {
        ...state,
        classes: action.payload
      };
    default:
      return state;
  }
}

export default classReducer;
