import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './modules/components/home';

export default props => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};
