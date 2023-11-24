import { SET_ITEMS } from "../actions/types";

const initialState = {
  items: [],
  loading: false
};

function itemReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}

export default itemReducer;
