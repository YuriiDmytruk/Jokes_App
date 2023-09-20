import React, { useState } from "react";
import { Button, Container, Form, Col, Row } from "react-bootstrap";

export default function JokesControl(props) {
  const [amount, setAmount] = useState();
  const [isValid, setValid] = useState(false);

  const validateJokesAmountInput = (e) => {
    if (e.target.value.match(/^[0-9]+$/) != null) {
      const number = +e.target.value;
      if (number >= 1 && number <= 10) {
        setAmount(number);
        setValid(true);
        return;
      }
    }
    setValid(false);
  };

  const changeAmount = () => {
    props.fetchJokes(amount);
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col>
          <Row>
            <Col>
              <Container>
                <Form.Control
                  type="text"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                  onChange={(e) => {
                    validateJokesAmountInput(e);
                  }}
                />
                <Form.Text muted>
                  Enter number of jokes to add. Value must be 1-10
                </Form.Text>
              </Container>
            </Col>
            <Col md="auto">
              <Button disabled={!isValid} onClick={changeAmount}>
                Add
              </Button>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <Form.Select aria-label="Default select example">
                <option value="all">All</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Text muted>Choose joke category</Form.Text>
            </Col>
            <Col md="auto">
              <Button>Filter</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

/*<input
        placeholder="input amount of Jokes"
        onChange={(e) => {
          validateJokesAmountInput(e);
        }}
      />
      <button onClick={changeAmount} disabled={!isValid}>
        ADD
      </button> */
