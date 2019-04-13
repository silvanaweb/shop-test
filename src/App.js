import { createBrowserHistory as createHistory } from "history";
import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import "./App.css";
import ProductsList from "./components/ProductsList";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Page } from "./pages/Page";

export const history = createHistory();

const App = () => (
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

export default App;
