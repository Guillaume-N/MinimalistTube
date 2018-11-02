import React from "react";

const VideoPlayer = props => {
  const videoId = props.match.params.id;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="video-container">
              <iframe title="video" src={url} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
