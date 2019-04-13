import React from "react";
import { Route } from "react-router-dom";
import { Header } from "../components/Header/Header";

const Page = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props => (
      <div>
        <Header />
        <div className="content-container">
          <Component {...props} />
        </div>
      </div>
    )}
  />
);

export { Page };
