import express from "express";
import { getPokemon, getItems, getPokemonByName } from "./helper";
import { getOrWrite } from "../utils/get-or-write";
import pagination from "../utils/paginate";

const pokemonRouter = express.Router();

pokemonRouter.get("/pokemon", async (req, res) => {
  const result = await getOrWrite(`all-pokemon.json`, () => {
    return getPokemon();
  });
  let pokemon = result.results;

  let { page, limit, searchTerm } = req.query;

  // Validate for negative numbers
  page = page > 0 ? parseInt(page) : 1;
  limit = limit > 0 ? parseInt(limit) : 20;

  if (searchTerm?.length > 0) {
    pokemon = pokemon.filter((p) => {
      return p.name.includes(searchTerm) || p.url.includes(searchTerm);
    });
  }

  return res.json(pagination(pokemon, page, limit));
});

pokemonRouter.get("/pokemon/:name", async (req, res) => {
  const name = req.params.name;
  const result = await getOrWrite(`pokemon-${name}.json`, () => {
    return getPokemonByName(name);
  });

  return res.json(result);
});

pokemonRouter.get("/items", async (req, res) => {
  const result = await getOrWrite("all-items.json", () => {
    return getItems();
  });

  return res.json(result);
});

export default pokemonRouter;
