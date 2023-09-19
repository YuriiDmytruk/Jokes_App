import React from "react";

import "./JokesList.css";

import Joke from "../Joke/Joke";

export default function JokesList(props) {
  return (
    <ul>
      {props.jokes.map((e) => (
        <Joke joke={e} />
      ))}
    </ul>
  );
}
