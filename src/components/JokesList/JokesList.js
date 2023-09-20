import React from "react";

import Joke from "../Joke/Joke";

import StyledJokesList from "./styled/StyledJokesList";
import Container from "../../Container";

export default function JokesList(props) {
  return (
    <Container>
      <StyledJokesList>
        {props.jokes.map((e) => (
          <Joke joke={e} showAll={false} />
        ))}
      </StyledJokesList>
    </Container>
  );
}
