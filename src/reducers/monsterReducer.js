import { SET_MONSTERS, SET_MONSTER_NAMES } from "../actions/types";

const initialState = {
  monsters: [],
  monsterNames: [],
  loading: false
};

function monsterReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MONSTERS:
      return {
        ...state,
        monsters: action.payload
      };
    case SET_MONSTER_NAMES:
      return {
        ...state,
        monsters: action.payload
      }
    default:
      return state;
  }
}

export default monsterReducer;
