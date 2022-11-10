import "./Pokemon.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { pokemonApiUrl } from "../constants";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function Pokemon({ pokemon }) {
  const [pokemonInformation, setPokemonInformation] = useState(null);

  useEffect(() => {
    axios
      .get(`${pokemonApiUrl}/pokemon/${pokemon.name}`)
      .then((response) => response.data)
      .then((pi) => setPokemonInformation(pi));
  }, [pokemon]);

  if (!pokemonInformation) {
    return <></>;
  }

  const typeClass = pokemonInformation.types.map((t) => t.type.name).join("-");
  const pokemonId = `#${pokemonInformation.id.toString().padStart(3, "0")}`;
  const pokemonName = pokemonInformation.name;

  return (
    <>
      <Col sm={12} md={6} lg={3} className="mb-2 mt-2">
        <Card className={`card-bg-${typeClass}`}>
          <Card.Img
            variant="top"
            style={{ maxWidth: "100%" }}
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
      </Col>
    </>
  );
}
