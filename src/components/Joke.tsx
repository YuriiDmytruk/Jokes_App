import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { CardSize, CardTextSize, CenterButton } from '../styled/Joke';

import { useDispatch } from 'react-redux';
import { deleteJoke } from '../redux/ducks/jokes';

import { Joke as JokeType } from '../types';

type JokeProps = {
  joke: JokeType;
};

const CHARS_IN_JOKE = 50;
const DOTS = '...';

const Joke = (props: JokeProps): JSX.Element => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteJoke(props.joke.id));
  };

  return (
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
              <Row>
                <Col>
                  <CenterButton>
                    <Link to={`/joke/${props.joke.id}`}>
                      <Button variant="primary">Check</Button>
                    </Link>
                  </CenterButton>
                </Col>
                <Col>
                  <CenterButton>
                    <Button variant="danger" onClick={onDelete}>
                      Delete
                    </Button>
                  </CenterButton>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </CardSize>
      </Container>
    </Col>
  );
};

export default Joke;
