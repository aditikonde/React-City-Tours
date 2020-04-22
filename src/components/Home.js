import React from "react";
import "../App.scss";
import logoimg from "../city-tour.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container container-home">
      <h1 className="title-home">GlobeTrot Travels</h1>
      <h2 className="subtitle">We take you to your dreamlands!</h2>
      <Link to="/tours">
        <img src={logoimg} alt="city-tour" className="App-logo" />
      </Link>
      <div>
        <h3 className="para para-home">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          suscipit, molestias quam earum veniam debitis tenetur quis, laboriosam
          libero fugiat accusamus non. Laboriosam totam enim quae ducimus amet
          porro ipsa!
        </h3>
      </div>
    </div>
  );
}
