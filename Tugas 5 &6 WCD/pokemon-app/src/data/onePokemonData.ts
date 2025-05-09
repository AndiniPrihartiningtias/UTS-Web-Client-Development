import { dummyData } from './pokemonData';

export const onePokemonData = dummyData.map((pokemon, index) => ({
  ...pokemon,
  id: 1000 + index,
  health: getRandomStat(100, 300),
  attack: getRandomStat(20, 50),
  defense: getRandomStat(30, 60),
}));

function getRandomStat(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
