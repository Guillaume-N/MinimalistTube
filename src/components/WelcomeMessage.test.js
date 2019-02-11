import React from "react";
import { shallow } from "enzyme";
import WelcomeMessage from "./WelcomeMessage";

describe("WelcomeMessage Component", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<WelcomeMessage />);
    expect(wrapper).toMatchSnapshot();
  });
});
