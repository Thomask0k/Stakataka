import "./Pokemon.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { pokemonApiUrl } from "../constants";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function Pokemon({
  name,
  selectable,
  selected,
  setSelected,
  setShowInfoModal,
  setClickedPokemon,
}) {
  const [pokemonInformation, setPokemonInformation] = useState(null);

  useEffect(() => {
    axios
      .get(`${pokemonApiUrl}/pokemon/${name}`)
      .then((response) => response.data)
      .then((pi) => setPokemonInformation(pi));
  }, [name]);

  if (!pokemonInformation) {
    return <></>;
  }

  const typeClass = pokemonInformation.types.map((t) => t.type.name).join("-");
  const pokemonId = `#${pokemonInformation.id.toString().padStart(3, "0")}`;
  const pokemonName = pokemonInformation.name;

  return (
    <>
      <Card
        className={`card-bg-${typeClass} ${selected ? "card-selected" : " "}`}
        onClick={() => {
          if (selectable) {
            setSelected(pokemonName);
          } else {
            if (setShowInfoModal) setShowInfoModal(true);
            if (setClickedPokemon) setClickedPokemon(pokemonInformation);
          }
        }}
      >
        <Card.Img
          variant="top"
          src={
            pokemonInformation.sprites.front_default ||
            "https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif"
          }
        />
        <Card.Body>
          <Card.Title>
            {pokemonId}
            {` ${pokemonName.charAt(0).toUpperCase()}${pokemonName.slice(1)}`}
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}
