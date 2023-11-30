import { SET_CLASSES, SET_CLASS_NAMES } from "../actions/types";

const initialState = {
  classes: [],
  classNames: [],
  loading: false
};

function classReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CLASSES:
      return {
        ...state,
        classes: action.payload
      };
    case SET_CLASS_NAMES:
      return {
        ...state,
        classNames: action.payload
      }
    default:
      return state;
  }
}

export default classReducer;
