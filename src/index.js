import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import indexRoutes from "routes/index";

import "assets/scss/material-kit-react.css";

export var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return (
          <Route path={prop.path} key={key} component={prop.component} exact />
        );
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);
