import {service} from '../service';
import {pokemonRoutes} from './pokemonRoutes';

export const pokemonService = {
  getAllPokemons: (limit: number) =>
    service.get(pokemonRoutes.getAllPokemons(limit)),
};
