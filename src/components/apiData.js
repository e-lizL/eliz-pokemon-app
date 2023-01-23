import axios from "axios";
import { useState, useEffect } from "react";

const ApiData = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const pokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";

  useEffect(() => {
    axios
      .get(pokemonUrl)
      .then(response => setPokemonData(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
   <>
      { pokemonData.map(pokemon => (
        <div key={"name"}>
        </div>
      ))}
    </>   
  )
};

export default ApiData;