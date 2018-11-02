import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import "./index.css";
import App from "./components/App";

import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/watch/:id" component={App} />
          <Route path="/search/:term" component={App} />
          <Route component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
