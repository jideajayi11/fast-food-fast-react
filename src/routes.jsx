import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';
import FormContainer from './components/container/FormContainer';


const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={FormContainer} />
    </Switch>
  </BrowserRouter>
);

export default routes;
