import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Container, Form, Col, Row } from 'react-bootstrap';
import { ComponentMergin } from './styled/JokesControl';

import { fetchJokes } from '../redux-saga/jokesReducer';

export default function JokesControl(props) {
  const [amount, setAmount] = useState(0);
  const [filter, setFilter] = useState(props.all);
  const [isValid, setValid] = useState(false);
  const dispatch = useDispatch();

  const validateJokesAmountInput = (event) => {
    if (event.target.value.match(/^[0-9]+$/) != null) {
      const number = parseInt(event.target.value);
      if (number >= 1 && number <= 10) {
        setAmount(number);
        setValid(true);
        return;
      }
    }
    setValid(false);
  };

  const changeAmount = async () => {
    dispatch(fetchJokes(props.jokesLength, amount));

    document.getElementById('inputAmount').value = '';
    setAmount('');
    setValid(false);
  };

  const changeFilter = () => {
    props.setPage(1);
    props.setFilter(filter);
  };

  return (
    <ComponentMergin>
      <Container>
        <Row>
          <Col>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  id="inputAmount"
                  onChange={(event) => {
                    validateJokesAmountInput(event);
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
                  onChange={(event) => {
                    setFilter(event.target.value);
                  }}
                >
                  {[props.all]
                    .concat(props.categories)
                    .map((category, index) => (
                      <option key={index} value={category}>
                        {category}
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
    </ComponentMergin>
  );
}
