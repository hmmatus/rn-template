export const getPokemonImageUrl = (url: string) => {
  const pokemonIndex = url.split('/')[url.split('/').length - 2];
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
};
