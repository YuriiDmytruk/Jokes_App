import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { CardSize, CardTextSize } from '../styled/Joke';

import {Joke as JokeType} from '../types'

type JokeProps = {
  joke: JokeType
};

const CHARS_IN_JOKE = 50;
const DOTS = '...';

const Joke = (props: JokeProps): JSX.Element  => (
  <Col>
    <Container>
      <CardSize>
        <Card>
          <Card.Body>
            <Card.Title>{props.joke.category}</Card.Title>
            <Card.Text>
              <CardTextSize>
                {props.joke.joke.slice(0, CHARS_IN_JOKE) + DOTS}
              </CardTextSize>
            </Card.Text>
            <Link to={`/joke/${props.joke.id}`}>
              <Button color="primary">Check</Button>
            </Link>
          </Card.Body>
        </Card>
      </CardSize>
    </Container>
  </Col>
);

export default Joke;
