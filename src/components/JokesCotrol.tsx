import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Container, Form, Col, Row } from 'react-bootstrap';
import { ComponentMergin } from '../styled/JokesControl';

import { fetchJokes } from '../redux/ducks/jokes';
import { validateJokesAmountInput } from '../utils'

type JokesControlProps = {
  jokesLength: number;
  all: string;
  categories: string[];
  setPage: (page: number) => void;
  setFilter: (filter: string) => void;
};

 const JokesControl = (props: JokesControlProps): JSX.Element => {
  const [amount, setAmount] = useState<string>('');
  const [filter, setFilter] = useState<string>(props.all);
  const [isValid, setValid] = useState<boolean>(false);
  const dispatch = useDispatch();

   const onChangeAmount = (event: React.ChangeEvent<HTMLInputElement>): void => {
     if (validateJokesAmountInput(event)) {
       setAmount(event.target.value);
        setValid(true);
        return;
     }
     setValid(false);
  }

  const changeAmount = (): void => {
    dispatch(fetchJokes(props.jokesLength, parseInt(amount)));
    setAmount('');
    setValid(false);
  };

  const changeFilter = (): void => {
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
                  value={amount}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    onChangeAmount(event);
                  }}
                />
                <Form.Text muted>
                  Enter the number of jokes to add. Value must be 1-10.
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
                  onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                    setFilter(event.target.value);
                  }}
                >
                  {[props.all, ...props.categories].map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </Form.Select>
                <Form.Text muted>Choose a joke category</Form.Text>
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

export default JokesControl;