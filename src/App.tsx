import axios, { AxiosResponse } from "axios";
//AxiosRespose is a typing tool, for when you are testing data fetching & don't want typescript on your back 
import { useState, useEffect } from "react";
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
interface Pokemons {
  name: string;
  url: string;
}

function App() {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [pokemonNames, setPokemonNames] = useState<string[]>([]);
  const [selectValue, setSelectValue] = useState('');


  useEffect(() => {
    const getPokemonData = async () => {
      const pokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";
      const res = await axios.get(pokemonUrl);

      res.data.results.forEach(async (pokemon: Pokemons) => {
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
      />
      <SelectPokemon
        pokemonNames={pokemonNames}
        selectValue={selectValue}
        setSelectValue={setSelectValue}
      />
      <PokemonCards pokemonData={pokemonData}/>
    </>
  );
};

export default App;
