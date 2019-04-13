import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { startSetProducts } from "./store/actions/products";
import configureStore from "./store/configureStore";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

store.dispatch(startSetProducts()).then(() => {
  ReactDOM.render(jsx, document.getElementById("root"));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
