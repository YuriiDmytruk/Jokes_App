import React, { useState } from "react";

import JokesList from "../JokesList";
import JokesControl from "../JokesCotrol";

const URL = "https://api.api-ninjas.com/v1/dadjokes?limit=";
const ALL = "ALL";
const KEY = "FZ/AKic+o4S4M8w6uUkbDA==m9YD4yHpLhWnTHuj";

export default function JokesPage() {
  const [jokes, setJokes] = useState([]);
  const [filter, setFilter] = useState(ALL);

  async function fetchJokes(jokesAmount) {
    try {
      const response = await fetch(URL + jokesAmount, {
        method: "GET",
        headers: {
          "X-Api-Key": KEY,
        },
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

  const filterJokes = () =>
    filter === ALL ? jokes : jokes.filter((e) => e.category === filter);

  const getUniqueCategoris = () => [...new Set(jokes.map((e) => e.category))];

  return (
    <>
      <JokesControl
        fetchJokes={fetchJokes}
        setFilter={setFilter}
        categories={getUniqueCategoris()}
        all={ALL}
      />
      <JokesList jokes={filterJokes()} />
    </>
  );
}

const categories = ["Programing", "Dad Joke", "Animals", "Car Joke"];

const getRandomCategory = () =>
  categories[Math.floor(Math.random() * categories.length)];
