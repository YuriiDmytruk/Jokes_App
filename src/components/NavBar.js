import React from 'react';

import { Navbar, Container } from 'react-bootstrap';

const NavBar = () => (
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/">Jokes</Navbar.Brand>
    </Container>
  </Navbar>
);

export default NavBar;
