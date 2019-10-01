import React from "react";
import { shallow } from "enzyme";
import ClassComponentToTest from "../components/ClassComponentToTest";
require("../setupTest");

it("ClassComponentToTest component snapshot", () => {
  const wrapper = shallow(<ClassComponentToTest />);
  expect(wrapper).toMatchSnapshot();
});
