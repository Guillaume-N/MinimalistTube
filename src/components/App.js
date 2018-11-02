import React, { Component } from "react";
import PropTypes from "prop-types";
import YTSearch from "youtube-api-search";
import "../App.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import Footer from "./Footer";

const API_KEY = "AIzaSyAktD_QpHPS2F42M1PH0IEfOXR9F5hFw5U";

class App extends Component {
  state = {
    videos: []
  };

  componentWillMount() {
    this.videoId = this.props.match.params ? this.props.match.params.id : null;
    this.searchTerm = this.props.match.params
      ? this.props.match.params.term
      : null;

    if (this.searchTerm) {
      this.searchVideos(this.searchTerm);
    }
  }

  searchVideos = term => {
    this.videoId = null;
    this.searchTerm = term;
    YTSearch({ key: API_KEY, term }, videos => {
      this.setState({ videos });
    });
  };

  showVideo = videoId => {
    this.videoId = videoId;
    this.searchTerm = null;
  };

  render() {
    return (
      <div>
        <Header />
        <SearchBar searchVideos={this.searchVideos} />
        {this.searchTerm && (
          <VideoList videos={this.state.videos} showVideo={this.showVideo} />
        )}
        {this.videoId && <VideoPlayer video={this.videoId} />}
        <Footer />
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object
};

export default App;
