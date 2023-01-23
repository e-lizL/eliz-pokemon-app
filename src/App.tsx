import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import PokemonList from './components/PokemonList';
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
  const [dataTest, setDataTest] = useState<AxiosResponse | null>(null); 


  useEffect(() => {
    const getPokemonData = async () => {
      const pokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";

      const res = await axios.get(pokemonUrl);

      setDataTest(res.data.results)

      // res.data.results.forEach(async (pokemon: Pokemons) => {
      //   const poke = await axios.get(
      //     `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      //   );
      //   setPokemonData((p) => [...p, poke.data]);
      // });

    };
    getPokemonData();
    }, []);

    console.log(dataTest);
   

  return (
    <>
      <Header/>
      <SelectPokemon/>
      <PokemonList pokemonData={pokemonData}/>
    </>
  );
};

export default App;
