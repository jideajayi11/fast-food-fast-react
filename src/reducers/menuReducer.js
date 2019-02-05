import { GET_RESTAURANTS, GET_MENU } from "../constants/actionTypes";
const initialState = {
  restaurants: [],
  currentMenu: [],
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANTS: {
      return {
        ...state,
        restaurants: action.payload,
      };
    }
    case GET_MENU: {
      return {
        ...state,
        currentMenu: action.payload,
      };
    }
    default: return state;
  }
}

export default menuReducer; 
