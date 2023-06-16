const BASE_URL = '/pokemon';
const getAllPokemons = (limit: number) => `${BASE_URL}?limit=${limit}`;
const getPokemon = (name: string) => `${BASE_URL}/${name}`;

export const pokemonRoutes = {
  getAllPokemons: (limit: number) => getAllPokemons(limit),
  getPokemon: (name: string) => getPokemon(name),
};
