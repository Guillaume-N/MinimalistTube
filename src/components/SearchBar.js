import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchBar extends Component {
  state = {
    term: ""
  };

  goToVideoPlayer = () => {
    this.context.router.history.push(`/search/${this.state.term}`);
  };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.goToVideoPlayer();
    this.setState({ term: "" });
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <form method="POST" action="#" onSubmit={this.onFormSubmit}>
            <section className="columns">
              <div className="column is-6 is-offset-3 has-text-centered">
                <div className="field is-horizontal">
                  <input
                    className="input"
                    type="text"
                    autoFocus
                    value={this.state.term}
                    onChange={this.onInputChange}
                  />
                  <button className="button is-dark">
                    <span className="icon">
                      <i className="fas fa-search" />
                    </span>
                  </button>
                </div>
              </div>
            </section>
          </form>
        </div>
      </section>
    );
  }
}

SearchBar.contextTypes = {
  router: PropTypes.object
};

export default SearchBar;
