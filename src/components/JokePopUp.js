import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Modal, Button } from 'react-bootstrap';

export default function JokePopUp() {
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const joke = useSelector((state) =>
    state.jokes.find((e) => e.id === parseInt(id))
  );

  useEffect(() => {
    if (id !== undefined) {
      setShow(true);
    }
  }, [location, id]);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{joke.category}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{joke.joke}</Modal.Body>
      <Modal.Footer>
        <Link to="/">
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}
