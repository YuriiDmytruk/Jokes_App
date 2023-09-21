import React, { useState } from "react";
import { Button, Container, Form, Col, Row } from "react-bootstrap";

const componentMergin = { marginTop: "20px" };

export default function JokesControl(props) {
  const [amount, setAmount] = useState();
  const [filter, setFilter] = useState();
  const [isValid, setValid] = useState(false);

  const validateJokesAmountInput = (e) => {
    if (e.target.value.match(/^[0-9]+$/) != null) {
      const number = parseInt(e.target.value);
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

  const changeFilter = () => {
    props.setFilter(filter);
  };

  return (
    <Container style={componentMergin}>
      <Row>
        <Col>
          <Row>
            <Col>
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
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  setFilter(e.target.value);
                }}
              >
                {[props.all].concat(props.categories).map((e, i) => (
                  <option key={i} value={e}>
                    {e}
                  </option>
                ))}
              </Form.Select>
              <Form.Text muted>Choose joke category</Form.Text>
            </Col>
            <Col md="auto">
              <Button onClick={changeFilter}>Filter</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
