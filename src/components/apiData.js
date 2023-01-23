import axios from "axios";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const Pokemon = styled.div`
  border: 1px solid green;
`;

const ApiData = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const pokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";

  useEffect(() => {
    axios
    .get(pokemonUrl)
    .then((response) => {setPokemonData(response.data.results);
    });
   }, []);
    
  //  console.log(pokemonData.results);


  return (
   <div>
       { pokemonData.map(pokemon => (
          <Pokemon key={uuidv4()}>
            <div>{pokemon.name}</div>
            <div>{pokemon.url}</div>
          </Pokemon>
      ))} 
    </div>   
  )
};

export default ApiData;