import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
// AxiosResponse is typing tool, for when you are testing data fetching and don't want Typescript on your back
import PokemonCards from './components/PokemonCards';
import Header from './components/Header';
import { PokemonStats } from './interfaces';

function App() {
  const [pokemonData, setPokemonData] = useState<PokemonStats[]>([]);
  const [activeCircleSwitch, setActiveCircleSwitch] = useState(true);

  useEffect(() => {
    const getPokemonData = async () => {
      const pokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";
      try {
        const res = await axios.get(pokemonUrl)
        /* @ts-ignore */
        const alphabetData = res.data.results.sort((a, b) => a.name.localeCompare(b.name));
        alphabetData.forEach(async (pokemon: PokemonStats) => {
          const poke = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );
          setPokemonData((p) => [...p, poke.data]);
        });
      } catch (error) {
        console.log(error)
      }
    };
    getPokemonData();
  }, []);

  
  return (
    <>
      <Header 
        activeCircleSwitch={activeCircleSwitch}
        setActiveCircleSwitch={setActiveCircleSwitch}
        pokemonData={pokemonData}
      />

      <PokemonCards 
        pokemonData={pokemonData} 
      />
    </>
  );
}

export default App;

