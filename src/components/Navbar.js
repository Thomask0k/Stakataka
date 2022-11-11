import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import pokedexSvg from "../assets/pokedex.svg";
import stakataka from "../assets/stakataka.webp";

const PokeNavbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src={stakataka} style={{ width: "40px" }} />
          </Navbar.Brand>
          <Nav.Link href="/pokedex">
            <img src={pokedexSvg} style={{ width: "40px" }} />
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
};
export default PokeNavbar;
