import { combineReducers } from 'redux';
import { authReducer } from './authReducer';

const rootReducers = combineReducers({
  currentUser: authReducer,
});

export default rootReducers;
