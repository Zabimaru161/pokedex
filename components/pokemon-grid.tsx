"use client";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { PokemonCard } from "./pokemon-card";

interface PokemonGridProps {
  pokemonList: any;
}

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchText, setSearchText] = useState("");
  // filter the text
  // {name: "pikachu" , url:""}
  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  //save the filtered array off ojects
  const filteredPokemonList = searchFilter(pokemonList);

  return (
    <>
      <div>
        <h3 className="text-2xl py-6 text-center">Search for your pokemon</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="pokemonName"> Pokemon Name</Label>
          <Input
            type="text"
            value={searchText}
            autoComplete="off"
            id="pokemonName"
            placeholder="Pikachu, Mew..."
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon</h3>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        {filteredPokemonList.map((pokemon: any) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <PokemonCard name={pokemon.name} key={pokemon.name + "Card"} />
          );
        })}
      </div>
    </>
  );
}
