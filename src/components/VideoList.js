import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = props => {
  return (
    <section className="section">
      <div className="container is-centered">
        {props.videos.map(video => {
          return (
            <VideoListItem
              video={video}
              key={video.etag}
              showVideo={props.showVideo}
            />
          );
        })}
      </div>
    </section>
  );
};

export default VideoList;
