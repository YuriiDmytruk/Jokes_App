import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useParams, useLocation } from 'react-router-dom';

export default function JokePopUp() {
  const [show, setShow] = useState(false);

  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (id !== undefined) {
      setShow(true);
    }
  }, [location, id]);

  const handleClose = () => {
    setShow(false);
    window.history.go(-1);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {JOKE.category} ID = {id}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{JOKE.joke}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const JOKE = {
  category: 'Dad Joke',
  id: 0,
  joke: 'My dad died because he couldn’t remember his blood type. He kept insisting we “be positive,” but it’s just so hard without him.',
};
