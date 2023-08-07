import { PokemonGrid } from "@/components/pokemon-grid";
import { getPokemonList } from "@/lib/pokemonAPI";

export default async function Home() {
  // load in data.
  const pokemonList = await getPokemonList();
  // we can pass data to a client component.

  // text input: filter the pokemon cards under it
  //text input -> "use client" we need access to useState to handle the input
  // when text is inputted -> filter through out current pokemon data.
  // ("use client") pokemonGrid -> (text input, showing all the cards that are the result of the search)

  //we are going to get data for all the pokemon from a server component.
  //pass the data to pokemongrid

  // 1. Create PokemonGrid ( and more components)
  //2. load in data from pokemon api
  //3. pass in  data to pokemonGrid, show all the pokemon from api call.
  return <PokemonGrid pokemonList={pokemonList} />;
}
