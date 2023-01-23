import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useMemo } from 'react';

const StyledPokemonCards = styled.div`
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

interface PokemonDetails {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  abilities?: {
    ability: string;
    name: string;
  }[];
}

interface PokemonCardsProps {
  pokemonData: PokemonDetails[];
}

const PokemonCards = ({ pokemonData }: PokemonCardsProps) => {

  return (
   <StyledPokemonCards>
       { pokemonData && pokemonData.sort((a, b) => a.name.localeCompare(b.name)).map(pokemon => (
          <PokemonCard key={uuidv4()}>
            <img 
              src={pokemon.sprites.front_default}
              alt="placeholder"
              width="150"
              height="150" 
            />
            <PokemonName>{pokemon.name}</PokemonName> 
          </PokemonCard>
      ))} 
    </StyledPokemonCards>   
  )
};

export default PokemonCards;
