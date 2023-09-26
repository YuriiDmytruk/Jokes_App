import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { JokesState, Joke } from '../types';

const JokePopUp = (): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const joke: Joke | undefined = useSelector((state: JokesState) =>
    state.jokes.find((joke: Joke) => joke.id === parseInt(id))
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== undefined) {
      setShow(true);
    }
  }, [location, id]);

  const handleClose = (): void => {
    setShow(false);
    navigate('/');
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{joke?.category}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{joke?.joke}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default JokePopUp;
