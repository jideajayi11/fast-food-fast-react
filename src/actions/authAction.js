import jwt from "jsonwebtoken";
import { Post } from "../utilities/axiosRequest";
import { APP_AUTH } from "../constants/actionTypes";


export const authCreator = tokenPayload => ({
  type: APP_AUTH,
  payload: tokenPayload,
});

export const authAction = (details,
  { role, authType }) => async (dispatch) => {
    let api;
    switch (authType) {
      case 'signin':
        api = '/auth/login';
        break;
      case 'signup':
        api = '/auth/signup';
        break;
      default:
        api = '/auth/login';
    }
  try {
    const response = await Post(api, details);
    const token = response.token;
    if(token) {
      localStorage.setItem('fastFoodToken', token);
      localStorage.setItem('role', role);
      return dispatch(authCreator({
        ...jwt.decode(response.token),
        authenticated: true,
        role: role,
      }));
    }
    localStorage.setItem('fastFoodToken', '');
    localStorage.setItem('role', '');
    return dispatch(authCreator({
      ...response,
      authenticated: false,
      role: role,
    }));
  } catch (error) {
    return error;
  }
};
