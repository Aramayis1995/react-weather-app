import React from "react";

export default function Weather(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.url} alt="wether" />
      <p>{props.celsius}</p>
    </div>
  );
}
