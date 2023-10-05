import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Container,
  Form,
  Col,
  Row,
  Dropdown,
  DropdownButton,
  Spinner,
} from 'react-bootstrap';

import { ComponentMergin, LoaderConteiner } from '../styled/JokesControl';

import { fetchJokes } from '../redux/ducks/jokes';
import { validateJokesAmountInput } from '../utils';
import { JokesControlProps } from '../types';

const JokesControl = (props: JokesControlProps): JSX.Element => {
  const [amount, setAmount] = useState<string>('');
  const [filter, setFilter] = useState<string>(props.all);
  const [isValid, setValid] = useState<boolean>(amount !== '');
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(false);
  }, [props.jokesLength]);

  const onChangeAmount = (value: string): void => {
    setAmount(value);
    if (validateJokesAmountInput(value)) {
      setValid(true);
      return;
    }
    setValid(false);
  };

  const changeAmount = (): void => {
    setLoading(true);
    dispatch(fetchJokes(props.jokesLastID, parseInt(amount)));
    setAmount('');
    setValid(false);
  };

  const changeFilter = (eventKey: string | null): void => {
    if (eventKey !== null) {
      setFilter(eventKey);
      props.setPage(1);
      props.setFilter(eventKey);
    }
  };

  return (
    <ComponentMergin>
      <Container>
        <Row>
          <Col>
            <Row>
              <Col>
                <Form.Control
                  data-testid="AmountInput"
                  type="text"
                  id="inputAmount"
                  value={amount}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    onChangeAmount(event.target.value);
                  }}
                />
                <Form.Text muted>
                  Enter the number of jokes to add. Value must be 1-10.
                </Form.Text>
              </Col>
              <Col md="auto">
                <Button
                  disabled={!isValid}
                  onClick={changeAmount}
                  data-testid="ButtonAdd"
                >
                  Add
                </Button>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <LoaderConteiner>
                  {loading ? (
                    <Spinner animation="border" variant="primary" />
                  ) : (
                    <></>
                  )}
                </LoaderConteiner>
              </Col>
              <Col md="auto">
                <DropdownButton
                  key="Primary"
                  data-testid="DropdownButton"
                  onSelect={(eventKey) => changeFilter(eventKey)}
                  title={filter}
                >
                  {[props.all, ...props.categories].map((category, index) => (
                    <Dropdown.Item
                      key={index}
                      data-testid={category}
                      eventKey={category}
                      value={category}
                    >
                      {category}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </ComponentMergin>
  );
};

export default JokesControl;
