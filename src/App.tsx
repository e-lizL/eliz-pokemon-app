import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
// AxiosResponse is typing tool, for when you are testing data fetching and don't want Typescript on your back
import PokemonCards from './components/PokemonCards';
import Header from './components/Header';
import { PokemonStats } from './interfaces';

function App() {
  const [pokemonData, setPokemonData] = useState<PokemonStats[]>([]);
  const [activeCircleSwitch, setActiveCircleSwitch] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPokemonData = async () => {
      setIsLoading(true);
      const pokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";
      try {
        const res = await axios.get(pokemonUrl)
        const alphabetData = res.data.results.sort((a: PokemonStats, b: PokemonStats) => a.name.localeCompare(b.name));
        alphabetData.forEach(async (pokemon: PokemonStats) => {
          const poke = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );
          setPokemonData((p) => [...p, poke.data]);
        });
      } catch (error) {
        console.log(error)
      }
      setIsLoading(false)
    };
    getPokemonData();
  }, []);

  
  return (
    <>
      <Header 
        activeCircleSwitch={activeCircleSwitch}
        setActiveCircleSwitch={setActiveCircleSwitch}
        pokemonData={pokemonData}
        isLoading={isLoading}
      />

      <PokemonCards 
        pokemonData={pokemonData} 
      />
    </>
  );
}

export default App;

