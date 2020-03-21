import React, { Component } from "react";
import "./tour.scss";

export default class Tour extends Component {
  state = { showInfo: false };

  handleInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="cityImage" />
          <span className="btn-close" onClick={() => removeTour(id)}>
            <i className="fas fa-window-close"></i>
          </span>
        </div>
        <div className="tourInfo">
          <h2 style={{ textTransform: "uppercase" }}>{city}</h2>
          <h3>{name}</h3>
          <h4>
            About the city{"  "}
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down"></i>
            </span>
          </h4>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
