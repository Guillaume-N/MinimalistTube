import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
