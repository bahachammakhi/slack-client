import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import HomeContainer from './HomeContainer';
import SingupContainer from './SignupContainer';

const RootContainer = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/signup" exact component={SingupContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default RootContainer;
