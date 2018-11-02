import React, { Component } from "react";
import VideoListItem from "./VideoListItem";
import searchVideos from "../YtAPI";

class VideoList extends Component {
  state = {
    videos: []
  };

  getVideos(props) {
    const term = props.match.params.term;
    searchVideos(term).then(res => {
      this.setState({ videos: res.items });
    });
  }

  componentWillReceiveProps(nextProps) {
    this.getVideos(nextProps);
  }

  componentDidMount() {
    this.getVideos(this.props);
  }

  render() {
    return (
      <section className="section">
        <div className="container is-centered">
          {this.state.videos.map(video => {
            return <VideoListItem video={video} key={video.etag} />;
          })}
        </div>
      </section>
    );
  }
}

export default VideoList;
