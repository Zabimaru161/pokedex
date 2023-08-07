const POKEMON_API = "https://pokeapi.co/api/v2/";

// getpokemonlist -> get all pokemon
export async function getPokemonList() {
  const response = await fetch(POKEMON_API + "pokemon?limit=100000&offset=0");
  const data = await response.json();
  return data.results;
}

// getpokemon -> given a sting "pikachu", get the information of pikachu
export async function getPokemon(name: string) {
  const response = await fetch(POKEMON_API + "pokemon/" + name);
  const data = await response.json();
  return data;
}
