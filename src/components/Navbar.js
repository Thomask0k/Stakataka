import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const PokeNavbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Stakataka</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/teams">Teams</Nav.Link>
              <Nav.Link href="/pokedex">Pokédex</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default PokeNavbar;
