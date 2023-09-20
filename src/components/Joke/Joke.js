import React from "react";

import { Button, Card, Col, Container } from "react-bootstrap";

export default function Joke(props) {
  const checkClickHendler = () => {
    console.log(props.joke.id);
  };

  return (
    <Col>
      <Container>
        <Card
          style={{
            width: "17rem",
            height: "10rem",
            margin: "10px auto",
          }}
        >
          <Card.Body>
            <Card.Title tag="h5">{props.joke.category}</Card.Title>
            <Card.Text style={{ height: "3rem" }}>
              {props.showAll
                ? props.joke.joke
                : props.joke.joke.slice(0, 50) + "..."}
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

/*

*/
