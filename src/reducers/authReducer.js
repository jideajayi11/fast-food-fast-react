import { APP_AUTH } from "../constants/actionTypes";
const initialState = {
  details: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_AUTH: {
      return {
        ...state,
        details: action.payload,
      };
    }
    default: return state;
  }
}

export default authReducer;
