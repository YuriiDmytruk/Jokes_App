import React from "react";

import "./JokesList.css";

import Joke from "../Joke/Joke";

export default function JokesList() {
  return (
    <>
      <ul>
        <Joke />
      </ul>
    </>
  );
}
