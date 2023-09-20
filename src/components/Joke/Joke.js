import React from "react";

import {
  Wrapper,
  CategoryPlace,
  CategoryText,
  ButtonPlace,
  Button,
  JokeText,
} from "./styledComponents";

export default function Joke(props) {
  const checkClickHendler = () => {
    console.log(props.joke.id);
  };

  return (
    <Wrapper key={props.joke.id}>
      <CategoryPlace>
        <CategoryText>{props.joke.category}</CategoryText>
      </CategoryPlace>
      <JokeText>
        {props.showAll ? props.joke.joke : props.joke.joke.slice(0, 50) + "..."}
      </JokeText>
      <ButtonPlace>
        <Button onClick={checkClickHendler}>Check</Button>
      </ButtonPlace>
    </Wrapper>
  );
}

/*

*/
