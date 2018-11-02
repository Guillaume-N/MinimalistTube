import React, { Component } from "react";
import VideoListItem from "./VideoListItem";
import searchVideos from "../YtAPI";

class VideoList extends Component {
  state = {
    videos: []
  };

  componentDidMount() {
    this.term = this.props.match.params.term;
    searchVideos(this.term).then(res => {
      this.setState({ videos: res.items });
    });
  }

  render() {
    if (this.state.videos)
      return (
        <section className="section">
          <div className="container is-centered">
            {this.state.videos.map(video => {
              return <VideoListItem video={video} key={video.etag} />;
            })}
          </div>
        </section>
      );

    return <div>Loading...</div>;
  }
}

export default VideoList;
