import React from "react";
import { Button, Card, Col, Container } from "react-bootstrap";

const cardSize = {
  width: "17rem",
  height: "10rem",
  margin: "10px auto",
};
const cardTextSize = { height: "3rem" };
const CHARS_IN_JOKE = 50;
const DOTS = "...";

export default function Joke(props) {
  const checkClickHendler = () => {
    console.log(props.joke.id);
  };

  return (
    <Col>
      <Container>
        <Card style={cardSize}>
          <Card.Body>
            <Card.Title tag="h5">{props.joke.category}</Card.Title>
            <Card.Text style={cardTextSize}>
              {props.joke.joke.slice(0, CHARS_IN_JOKE) + DOTS}
            </Card.Text>
            <Button color="primary" onClick={checkClickHendler}>
              Check
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </Col>
  );
}
