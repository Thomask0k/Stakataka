import "./Pokedex.css";
import React, { useState, useEffect } from "react";
import PokemonList from "../../components/PokemonList";
import { Form, Button, Container } from "react-bootstrap";
import Pagination from "../../components/Pagination";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { pokemonApiUrl } from "../../constants";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(`${pokemonApiUrl}/pokemon`, {
        params: {
          page: page,
          limit: 10,
          searchTerm,
        },
      })
      .then((response) => response.data)
      .then(({ lastPage, items }) => {
        setPokemon(items);
        setLastPage(lastPage);
      });
  }, [page, searchTerm]);

  return (
    <>
      <div>
        <Container>
          <Row>
            <Col sm={{ span: 5, offset: 6 }} lg={{ span: 4, offset: 7 }}>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setPage(1);
                  }}
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      {pokemon.length > 0 ? (
        <>
          <PokemonList pokemon={pokemon} />
          <Pagination page={page} lastPage={lastPage} setPage={setPage} />
        </>
      ) : (
        <span>There are no wild Pokémon in the tall grass!</span>
      )}
    </>
  );
};

export default Pokedex;
