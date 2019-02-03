import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import thunk from 'redux-thunk';

const devTools = [
  applyMiddleware(thunk),
  ...(window.__REDUX_DEVTOOLS_EXTENSION__
    ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : [])
];

const store = createStore(
  rootReducer,
  compose(...devTools)
);

export default store;
