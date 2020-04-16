import React, { Component } from "react";
// import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import TourList from "./components/TourList/Tourlist";
import Home from "./components/Home";
import About from "./components/About";

import { Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/tours" component={TourList} />
        <Route exact path="/about" component={About} />
      </React.Fragment>
    );
  }
}
