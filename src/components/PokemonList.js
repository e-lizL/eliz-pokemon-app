import axios from "axios";
import { useState, useEffect } from "react";
import styled from 'styled-components';

const StyledPokemonList = styled.div`
  /* border: 1px solid green;   */
  width: 98%;
  margin: 0 auto;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  img {
    margin: 0 auto;
  } 
`; 

const PokemonCard = styled.div`
  border: 1px solid gray;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  background:  #e6e2e2;
  padding: 12px;
`;

const PokemonName = styled.div`
  margin-top: 8px;
`

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const pokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";

  useEffect(() => {
    axios
    .get(pokemonUrl)
    .then((response) => {setPokemonData(response.data.results);
    });
   }, []);

   //  console.log(pokemonData.results);

   pokemonData.sort((a,b) => a.name.localeCompare(b.name));
    
  return (
   <StyledPokemonList>
       { pokemonData.map(pokemon => (
          <PokemonCard key={"name"}>
            <img 
            src="https://via.placeholder.com/150"
            alt="placeholder"
            width="150"
            height="150" />
            <PokemonName>{pokemon.name}</PokemonName> 
          </PokemonCard>
      ))} 
    </StyledPokemonList>   
  )
};

export default PokemonList;