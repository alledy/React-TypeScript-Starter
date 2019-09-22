import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "@/pages/Home";

const Root: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Root;
