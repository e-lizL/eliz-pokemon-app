import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
// AxiosResponse is typing tool, for when you are testing data fetching and don't want Typescript on your back
import PokemonCards from './components/PokemonCards';
import Header from './components/Header';
import SelectPokemon from './components/SelectPokemon';

interface Pokemon {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
  }

interface Pokemon {
  name: string;
  url: string;
}

function App() {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [pokemonNames, setPokemonNames] = useState<string[]>([]);
  const [selectValue, setSelectValue] = useState("");
  const [activeCircleSwitch, setActiveCircleSwitch] = useState(true);

  useEffect(() => {
    const getPokemonData = async () => {
      const pokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";
      const res = await axios.get(pokemonUrl);

      res.data.results.forEach(async (pokemon: Pokemon) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemonData((p) => [...p, poke.data]);
        setPokemonNames((p) => [...p, pokemon.name]);
      });
    };
    getPokemonData();
  }, []);

  return (
    <>
      <Header 
        selectValue={selectValue}
        activeCircleSwitch={activeCircleSwitch}
        setActiveCircleSwitch={setActiveCircleSwitch}
      />
      <SelectPokemon 
        pokemonNames={pokemonNames}
        selectValue={selectValue}
        setSelectValue={setSelectValue}
        setActiveCircleSwitch={setActiveCircleSwitch}
      />
      <PokemonCards 
        pokemonData={pokemonData} 
      />
    </>
  );
}

export default App;

