import React from "react";
import Pokemon from "./Pokemon";
import { Row } from "react-bootstrap";

export default function PokemonList({ pokemon }) {
  return (
    <>
      {pokemon.map((p) => (
        <Pokemon key={p.name} pokemon={p} />
      ))}
    </>
  );
}
