import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cart";
import filtersReducer from "./reducers/filters";
import productsReducer from "./reducers/products";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      products: productsReducer,
      filters: filtersReducer,
      cart: cartReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
