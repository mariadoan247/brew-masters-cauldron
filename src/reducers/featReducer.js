import { SET_FEATS } from "../actions/types";

const initialState = {
  feats: [],
  loading: false
};

function featReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FEATS:
      return {
        ...state,
        feats: action.payload
      };
    default:
      return state;
  }
}

export default featReducer;
