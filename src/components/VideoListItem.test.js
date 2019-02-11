import React from "react";
import { shallow } from "enzyme";
import VideoListItem from "./VideoListItem";

describe("VideoListItem Component", () => {
  it("should match snapshot", () => {
    const mockVideo = {
      snippet: {
        thumbnails: {
          default: {
            url: "https://test.com/test.png"
          }
        }
      },
      id: {
        videoId: 1
      }
    };

    const wrapper = shallow(<VideoListItem video={mockVideo} />);

    expect(wrapper).toMatchSnapshot();
  });
});
