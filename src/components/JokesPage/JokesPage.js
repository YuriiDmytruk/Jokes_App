import React from "react";

import "./JokesPage.css";

import JokesList from "../JokesList/JokesList";
import JokesControl from "../JokesControl/JokesCotrol";

export default function JokesPage() {
  return (
    <>
      <JokesControl />
      <JokesList />
    </>
  );
}
