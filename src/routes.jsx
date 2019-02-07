import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';
import UserSignIn from './components/container/UserSignIn';
import UserSignUp from './components/container/UserSignUp';
import ViewMenu from './components/container/ViewMenu';
import ViewOrder from './components/container/ViewOrder';


const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={UserSignIn} />
      <Route path="/user-register" component={UserSignUp} />
      <Route path="/view-menu" component={ViewMenu} />
      <Route path="/view-order" component={ViewOrder} />
    </Switch>
  </BrowserRouter>
);

export default routes;
