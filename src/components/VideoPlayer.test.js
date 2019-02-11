import React from "react";
import { shallow } from "enzyme";
import VideoPlayer from "./VideoPlayer";

describe("VideoPlayer Component", () => {
  it("should match snapshot", () => {
    const mockMatch = {
      params: {
        id: 1
      }
    };
    const wrapper = shallow(<VideoPlayer match={mockMatch} />);

    expect(wrapper).toMatchSnapshot();
  });
});
