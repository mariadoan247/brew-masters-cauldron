import { SET_SPELLS } from "../actions/types";

const initialState = {
  spells: [],
  loading: false
};

function spellReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SPELLS:
      return {
        ...state,
        spells: action.payload
      };
    default:
      return state;
  }
}

export default spellReducer;
