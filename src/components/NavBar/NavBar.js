import React from "react";

import { Navbar, Container } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Jokes</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
