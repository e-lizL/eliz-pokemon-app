import axios from "axios";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const ApiData = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const pokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";

  useEffect(() => {
    axios
    .get(pokemonUrl)
    .then((response) => {setPokemonData(response.data);
    });
   }, []);
    
   console.log(pokemonData.results);
  return (
   <>
      {/* { pokemonData.map(pokemon => (
        <div key={uuidv4()}>
          <div>{pokemon.name}</div>
          <div>{pokemon.url}</div>
        </div>
      ))} */}
    </>   
  )
};

export default ApiData;