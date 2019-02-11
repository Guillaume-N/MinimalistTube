import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header Component", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
