import { SET_SPELLS, SET_SPELL_NAMES } from "../actions/types";

const initialState = {
  spells: [],
  spellNames: [],
  loading: false
};

function spellReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SPELLS:
      return {
        ...state,
        spells: action.payload
      };
    case SET_SPELL_NAMES:
      return {
        ...state,
        spellNames: action.payload
      }
    default:
      return state;
  }
}

export default spellReducer;
