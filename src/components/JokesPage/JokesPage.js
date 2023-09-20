import React, { useState } from "react";

import "./JokesPage.css";

import JokesList from "../JokesList/JokesList";
import JokesControl from "../JokesControl/JokesCotrol";

const url = "https://api.api-ninjas.com/v1/dadjokes?limit=";

const headers = {
  "X-Api-Key": "FZ/AKic+o4S4M8w6uUkbDA==m9YD4yHpLhWnTHuj",
};

export default function JokesPage() {
  const [jokes, setJokes] = useState([]);

  async function fetchJokes(jokesAmount) {
    try {
      const response = await fetch(url + jokesAmount, {
        method: "GET",
        headers,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();

      data = data.map((e, i) => {
        return {
          joke: e.joke,
          id: jokes.length + i,
          category: getRandomCategory(),
        };
      });
      setJokes(jokes.concat(data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      <JokesControl fetchJokes={fetchJokes} />
      <JokesList jokes={jokes} />
    </>
  );
}

function getRandomCategory() {
  const categories = ["Programing", "Dad Joke", "Animals", "Car Joke"];
  return categories[Math.floor(Math.random() * categories.length)];
}
