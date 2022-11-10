import React from "react";

export default function PokemonList({ pokemon }) {
  return (
    <>
      {pokemon.map((p, index) => (
        <div key={p.name}>
          <a href={p.url}>{p.name}</a>
        </div>
      ))}
    </>
  );
}
