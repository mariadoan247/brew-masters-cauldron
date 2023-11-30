import { SET_ITEMS, SET_ITEM_NAMES } from "../actions/types";

const initialState = {
  items: [],
  itemNames: [],
  loading: false
};

function itemReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    case SET_ITEM_NAMES:
      return {
        ...state,
        itemNames: action.payload
      }
    default:
      return state;
  }
}

export default itemReducer;
