import * as React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import FiFaQuiz from './fifa-quiz';

export default () => (
  <BrowserRouter basename="/build">
    <Switch>
      <Route exact path="/" component={FiFaQuiz} />
    </Switch>
  </BrowserRouter>
);
