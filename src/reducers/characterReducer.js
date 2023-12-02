import { SET_USER_CHARACTERS } from "../actions/types";

const initialState = {
  characters: []
};

function characterReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_CHARACTERS:
      return {
        ...state,
        characters: action.payload
      };
    default:
      return state;
  }
}

export default characterReducer;
