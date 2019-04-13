import { createBrowserHistory as createHistory } from "history";
import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { ProductsList } from "../components/ProductsList";
import { NotFoundPage } from "./NotFoundPage";
import { Page } from "./Page";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route
          exact={true}
          path="/"
          render={() => <Redirect to="/products" />}
        />
        <Page path="/products" component={ProductsList} />
        <Page path="/products/:category-id" component={ProductsList} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
