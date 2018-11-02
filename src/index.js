import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WelcomeMessage from "./components/WelcomeMessage";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";
import "bulma/css/bulma.css";
import "./index.css";

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <SearchBar />
        <Switch>
          <Route exact path="/watch/:id" component={VideoPlayer} />
          <Route exact path="/search/:term" component={VideoList} />
          <Route exact path="/" component={WelcomeMessage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
