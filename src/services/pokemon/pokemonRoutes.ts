const BASE_URL = '/pokemon';
const getAllPokemons = (limit: number) => `${BASE_URL}?limit=${limit}`;

export const pokemonRoutes = {
  getAllPokemons: (limit: number) => getAllPokemons(limit),
};
