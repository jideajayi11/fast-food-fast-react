import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';
import UserSignIn from './components/container/UserSignIn';
import UserSignUp from './components/container/UserSignUp';


const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={UserSignIn} />
      <Route path="/user-register" component={UserSignUp} />
    </Switch>
  </BrowserRouter>
);

export default routes;
