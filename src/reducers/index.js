import { combineReducers } from 'redux';
import authReducer from './authReducer';
import menuReducer from './menuReducer';
import orderReducer from './orderReducer';

const rootReducers = combineReducers({
  currentUser: authReducer,
  menus: menuReducer,
  orders: orderReducer,
});

export default rootReducers;
