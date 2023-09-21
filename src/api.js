const URL = "https://api.api-ninjas.com/v1/dadjokes?limit=";
const KEY = "FZ/AKic+o4S4M8w6uUkbDA==m9YD4yHpLhWnTHuj";

export const fetchJokes = async (jokes, setJokes, jokesAmount) => {
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
};

const categories = ["Programing", "Dad Joke", "Animals", "Car Joke"];
const getRandomCategory = () =>
  categories[Math.floor(Math.random() * categories.length)];
