import React from "react";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <h2>{props.name}</h2>
      <img src={props.url} alt="wether" />
      <p>{props.celsius}</p>
    </div>
  );
}
