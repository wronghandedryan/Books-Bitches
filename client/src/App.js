/* eslint-disable no-undef */
/* jshint ignore: start */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NotListest from "./pages/NotListed";
import AddedDB from "./pages/AddedDB";

import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          // eslint-disable-next-line no-undef
          <Route exact path="/AddedBooksDB" component={AddedDB} />
          <Route component={NotListest} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
