import * as React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Joke } from './index';
import { Joke as JokeType } from '../types';

type JokesListProps = {
  jokes: JokeType[];
};

const JokesList = (props: JokesListProps): JSX.Element => (
  <Container>
    <Row>
      {props.jokes.map((joke) => (
        <Joke key={joke.id} joke={joke} />
      ))}
    </Row>
  </Container>
);

export default JokesList;
