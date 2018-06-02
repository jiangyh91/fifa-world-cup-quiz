import * as React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./home";

export default () => (
  <BrowserRouter basename="/build">
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);
