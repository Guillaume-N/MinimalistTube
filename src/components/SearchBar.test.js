import React from "react";
import { shallow } from "enzyme";
import SearchBar from "./SearchBar";

describe("SearchBar Component", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
