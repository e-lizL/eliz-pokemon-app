import axios from "axios";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const PokemonList = styled.div`
  border: 1px solid green; 
  width: 98%;
  margin: 0 auto;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  img {
    margin: 0 auto;
  }
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

   pokemonData.sort((a,b) => a.name.localeCompare(b.name));
    
  //  console.log(pokemonData.results);


  return (
   <div>
       { pokemonData.map(pokemon => (
          <PokemonList key={uuidv4()}>
            <div>{pokemon.name}</div>
            {/* <div>{pokemon.url}</div> */}
          </PokemonList>
      ))} 
    </div>   
  )
};

export default ApiData;