import "./Home.css";
import { useState, useEffect } from "react";
import PokemonList from "../../components/PokemonList";
import { pokemonApiUrl } from "../../constants";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch(`${pokemonApiUrl}/pokemon`)
      .then((response) => response.json())
      .then((pokemon) => setPokemon(pokemon));
  }, []);

  return (
    <>
      <PokemonList pokemon={pokemon}></PokemonList>
    </>
  );
};

export default Home;
