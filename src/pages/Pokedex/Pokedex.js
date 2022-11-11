import "./Pokedex.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonList from "../../components/PokemonList";
import { Form, Button, Container } from "react-bootstrap";
import Pagination from "../../components/Pagination";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { pokemonApiUrl, teamsApiUrl } from "../../constants";
import PokemonInformation from "../../components/PokemonInformation";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [team, setTeam] = useState(null);
  const [selected, setSelected] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState(null);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`${teamsApiUrl}/${id}`)
        .then((response) => response.data)
        .then((team) => {
          setTeam(team);
          setSelected(team.pokemon);
        });
    }
  }, [id]);

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

  function setSelectedPokemon(selectedPokemon) {
    let newSelected = [...selected];

    if (newSelected.includes(selectedPokemon)) {
      newSelected = newSelected.filter((p) => p !== selectedPokemon);
    } else {
      if (selected.length < 6) {
        newSelected.push(selectedPokemon);
      }
    }

    setSelected(newSelected);
  }

  function saveTeam() {
    axios
      .put(`${teamsApiUrl}/${id}`, {
        title: team.title,
        pokemon: selected,
      })
      .then(() => (window.location.href = window.location.origin));
  }

  return (
    <>
      <PokemonInformation
        show={showInfoModal}
        closeModal={() => {
          setShowInfoModal(false);
          setClickedPokemon(null);
        }}
        clickedPokemon={clickedPokemon}
      />
      <div>
        <Container>
          <Row>
            {team !== null && <span>Selected {selected.length} / 6</span>}
            <Col sm={{ span: 5, offset: 6 }} lg={{ span: 4, offset: 8 }}>
              {team !== null && (
                <Button variant="primary" onClick={saveTeam}>
                  Save
                </Button>
              )}
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
              </Form>
            </Col>
          </Row>
          <Row>
            {pokemon.length > 0 ? (
              <>
                <PokemonList
                  pokemon={pokemon}
                  selectable={team !== null}
                  selected={selected || []}
                  setSelected={setSelectedPokemon}
                  setShowInfoModal={setShowInfoModal}
                  setClickedPokemon={setClickedPokemon}
                />
                <Pagination page={page} lastPage={lastPage} setPage={setPage} />
              </>
            ) : (
              <span>There are no wild Pokémon in the tall grass!</span>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Pokedex;
