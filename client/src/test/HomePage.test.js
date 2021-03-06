import React from "react";
import { shallow, render } from "enzyme";
import { Home } from "../components/pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import toJson from "enzyme-to-json";
// require("../setupTest");

it("Home component snapshot", () => {
  const wrapper = render(
    <Router>
      <Home />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});
