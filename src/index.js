import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import "./index.css";
import App from "./components/App";
import Footer from "./components/Footer";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";

import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <App />
        <Switch>
          <Route exact path="/watch/:id" component={VideoPlayer} />
          <Route exact path="/search/:term" component={VideoList} />
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
