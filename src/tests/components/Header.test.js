import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";
import { categories, Header } from "../../components/Header";
import { cart } from "../fixtures/cart";

let history, wrapper;

beforeEach(() => {
  const cartData = [];
  history = { push: jest.fn() };
  wrapper = shallow(<Header cart={cartData} history={history} />);
});

test("should render Header with no cart correctly", () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});
test("should render Header with cart correctly", () => {
  wrapper = shallow(<Header cart={cart} history={history} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should load correct links", () => {
  expect(wrapper.find(`.Header__link`).length).toBe(categories.length + 1);
  expect(
    wrapper
      .find("NavLink")
      .first()
      .props().to
  ).toBe("/products");
  const linkTos = ["/products", ...categories.map(x => `/products/${x}`)];
  wrapper.find(`.Header__link`).map((link, idx) => {
    expect(link.prop("to")).toBe(linkTos[idx]);
  });
});

test("should go to Cart page when Cart button is clicked", () => {
  wrapper
    .find('[data-test="CartButton"]')
    .first()
    .simulate("click");

  expect(history.push).toHaveBeenLastCalledWith("/cart");
});
