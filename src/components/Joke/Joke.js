import React from "react";

import "./Joke.css";

export default function Joke(props) {
  console.log(props.joke);
  return <li key={props.joke.id}>{props.joke.joke}</li>;
}
