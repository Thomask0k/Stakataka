import axios from "axios";

const apiUrl = "https://pokeapi.co/api/v2";

export const getPokemon = async () => {
  const { data } = await axios.get(`${apiUrl}/pokemon`, {
    params: {
      limit: 1154,
    },
  });

  return data;
};

export const getItems = async () => {
  const response = await axios.get(`${apiUrl}/item?limit=1607`, {});

  return response.data.results;
};
