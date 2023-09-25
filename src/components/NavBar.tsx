import * as React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Container } from 'react-bootstrap';

const NavBar = (): JSX.Element  => (
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Link to="/">
        <Navbar.Brand>Jokes</Navbar.Brand>
      </Link>
    </Container>
  </Navbar>
);

export default NavBar;
