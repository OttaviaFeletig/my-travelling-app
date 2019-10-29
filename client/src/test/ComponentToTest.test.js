import React from "react";
import { shallow } from "enzyme";
import ComponentToTest from "../components/ComponentToTest";
// require("../setupTest");

it("ComponentToTest component snapshot", () => {
  const wrapper = shallow(<ComponentToTest />);
  expect(wrapper).toMatchSnapshot();
});
