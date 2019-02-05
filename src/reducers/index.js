import { combineReducers } from 'redux';
import authReducer from './authReducer';
import menuReducer from './menuReducer';

const rootReducers = combineReducers({
  currentUser: authReducer,
  menus: menuReducer,
});

export default rootReducers;
