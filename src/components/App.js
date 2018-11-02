import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";
import Header from "./Header";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    videos: []
  };

  render() {
    return (
      <div>
        <Header />
        <SearchBar searchVideos={this.searchVideos} />
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object
};

export default App;
