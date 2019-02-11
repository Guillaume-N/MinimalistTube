import React, { Component } from "react";
import VideoListItem from "./VideoListItem";
import searchVideos from "../searchYtAPI";

class VideoList extends Component {
  state = {
    videos: [],
    error: false
  };

  getVideos(props) {
    const term = props.match.params.term;
    searchVideos(term).then(res => {
      this.setState({ videos: res.items });
      res.items.length === 0
        ? this.setState({ error: true })
        : this.setState({ error: false });
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
          {this.state.error && (
            <div className="notification has-text-centered">
              No results found.
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default VideoList;
