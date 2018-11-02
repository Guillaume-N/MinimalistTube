import React, { Component } from "react";
import PropTypes from "prop-types";

class VideoListItem extends Component {
  render() {
    const imageUrl = this.props.video.snippet.thumbnails.default.url;
    const videoId = this.props.video.id.videoId;

    const onVideoClick = e => {
      this.context.router.history.push(`/watch/${videoId}`);
      this.props.showVideo(videoId);
    };

    return (
      <article className="media video-list-item" onClick={onVideoClick}>
        <figure className="media-left">
          <p className="image is-128x128">
            <img src={imageUrl} alt="video preview" />
          </p>
        </figure>
        <div className="media-content">
          <div className="field">
            <div className="control">
              <h5 className="title is-5">{this.props.video.snippet.title}</h5>
            </div>
            <p className="control">
              <strong>{this.props.video.snippet.channelTitle} - </strong>
              {this.props.video.snippet.description}
            </p>
          </div>
        </div>
      </article>
    );
  }
}

VideoListItem.contextTypes = {
  router: PropTypes.object
};

export default VideoListItem;
