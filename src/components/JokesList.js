import React from 'react';
import { Row, Container } from 'react-bootstrap';

import Joke from './Joke';

export default function JokesList(props) {
  return (
    <Container>
      <Row>
        {props.jokes.map((e) => (
          <Joke key={e.id} joke={e} />
        ))}
      </Row>
    </Container>
  );
}
