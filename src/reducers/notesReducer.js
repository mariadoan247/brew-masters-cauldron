import { SET_USER_NOTES } from "../actions/types";

const initialState = {
  notes: []
};

function notesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_NOTES:
      return {
        ...state,
        notes: action.payload
      };
    default:
      return state;
  }
}

export default notesReducer;
