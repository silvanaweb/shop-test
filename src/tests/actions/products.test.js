import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { setProducts, startSetProducts } from "../../store/actions/products";
import { products } from "../fixtures/products";

const createMockStore = configureMockStore([thunk]);

// should have test DB
let productsData = [];
beforeEach(done => {
  return fetch("https://my-json-server.typicode.com/spokeldn/react-test/db")
    .then(res => res.json())
    .then(result => {
      const { products } = result;
      productsData = products;
      done();
    });
});

test("should setup set products action object with data", () => {
  const action = setProducts(products);
  expect(action).toEqual({
    type: "SET_PRODUCTS",
    products
  });
});

test("should fetch the startSetProducts from DB", done => {
  const store = createMockStore({});

  store.dispatch(startSetProducts()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_PRODUCTS",
      products: productsData
    });
    done();
  });
});
