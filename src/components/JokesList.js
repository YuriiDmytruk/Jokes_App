import React from 'react';

import { Row, Container } from 'react-bootstrap';
import { Joke } from './index';

const JokesList = (props) => (
  <Container>
    <Row>
      {props.jokes.map((joke) => (
        <Joke key={joke.id} joke={joke} />
      ))}
    </Row>
  </Container>
);

export default JokesList;
