import React from "react";
import Pokemon from "./Pokemon";
import { Row, Col } from "react-bootstrap";

export default function PokemonList({
  pokemon,
  selected,
  selectable,
  setSelected,
  setClickedPokemon,
  setShowInfoModal,
}) {
  return (
    <>
      {pokemon.map((p) => (
        <Col key={p.name} sm={12} md={6} lg={3} className={"mb-2 mt-2"}>
          <Pokemon
            selectable={selectable}
            selected={selected.includes(p.name)}
            setSelected={setSelected}
            name={p.name}
            setClickedPokemon={setClickedPokemon}
            setShowInfoModal={setShowInfoModal}
          />
        </Col>
      ))}
    </>
  );
}
