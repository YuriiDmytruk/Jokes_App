import React from 'react';
import { Card, Container } from 'react-bootstrap';
//import { useParams } from "react-router-dom";

const cardMargin = { marginTop: '20px' };
const textSize = { fontSize: '150%' };

export default function JokePage() {
  //const { id } = useParams();
  return (
    <Container style={cardMargin}>
      <Card>
        <Card.Body style={textSize}>
          <Card.Title tag="h5">{JOKE.category}</Card.Title>
          <Card.Text>{JOKE.joke}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

const JOKE = {
  category: 'Dad Joke',
  id: 0,
  joke: 'My dad died because he couldn’t remember his blood type. He kept insisting we “be positive,” but it’s just so hard without him.',
};
