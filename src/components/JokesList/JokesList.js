import React from "react";
import Joke from "../Joke/Joke";
import { Row, Container } from "react-bootstrap";

export default function JokesList(props) {
  return (
    <Container>
      <Row>
        {props.jokes.map((e) => (
          <Joke joke={e} showAll={false} />
        ))}
      </Row>
    </Container>
  );
}
