import React, { Component } from "react";
import Tour from "../Tour/";
import { tourData } from "../../tourData";
import "./tourlist.scss";

export default class Tourlist extends Component {
  state = {
    tours: tourData
  };

  removeTour = id => {
    const sortedTours = this.state.tours.filter(item => item.id !== id);
    this.setState({ tours: sortedTours });
  };
  render() {
    return (
      <section className="tourlist">
        {this.state.tours.map(tour => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
        {/* {this.state.tours.map(tour => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))} */}
      </section>
    );
  }
}
