import { SET_FEATS, SET_FEAT_NAMES } from "../actions/types";

const initialState = {
  feats: [],
  featNames: [],
  loading: false
};

function featReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FEATS:
      return {
        ...state,
        feats: action.payload
      };
    case SET_FEAT_NAMES:
      return {
        ...state,
        featNames: action.payload
      }
    default:
      return state;
  }
}

export default featReducer;
