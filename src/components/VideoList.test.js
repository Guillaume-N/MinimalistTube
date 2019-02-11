import React from "react";
import { shallow } from "enzyme";
import VideoList from "./VideoList";

describe("VideoList Component", () => {
  it("should match snapshot", () => {
    const mockMatch = {
      params: {
        term: "test"
      }
    };
    const wrapper = shallow(<VideoList match={mockMatch} />);
    expect(wrapper).toMatchSnapshot();
  });
});
