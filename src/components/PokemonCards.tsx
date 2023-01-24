import { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { PokemonStats } from '../interfaces';
import {
  MainCard,
  StyledDetailWrapper,
  StyledFeaturedImageWrapper,
  StyledDetails,
} from ".././AppStyles";

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

const StyledPokemonCard = styled.div`
  border: 1px solid gray;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  background:  #e6e2e2;
  padding: 12px;
`;

const StyledPokemonName = styled.div`
  margin-top: 8px;
`;

const StyledFeaturedCard = styled(MainCard)`
  position: absolute;
  left: 0; 
  right: 0; 
  margin: 30px auto 0; 
  width: 80%;
  max-width: 400px;
`;

const StyledCloseButton = styled.button`
  padding: 8px;
  font-size: 1.1rem;
  width: 40px;
`;

interface PokemonCardsProps {
  pokemonData: PokemonStats[];
}

interface Detail {
  id: number;
  isOpened: boolean;
}

const PokemonCards = ({ pokemonData }: PokemonCardsProps) => {
  const [viewDetails, setViewDetails] = useState<Detail>({
    id: 0,
    isOpened: false,
  });

  const selectPokemon = (id: number) => {
    if (!viewDetails.isOpened) {
      setViewDetails({
        id: id,
        isOpened: true,
      });
    }
  };


  return (
   <StyledPokemonCards>
     {viewDetails.isOpened && 
        <StyledFeaturedCard>
          <StyledCloseButton onClick={() => setViewDetails({id: 0, isOpened: false})}>
            X
          </StyledCloseButton>

          <div>
            <StyledFeaturedImageWrapper>
              {/* @ts-ignore */}
              <img src={pokemonData[0].sprites.other.dream_world.front_default} 
                alt="featured pokemon"
              />
            </StyledFeaturedImageWrapper>

            <StyledDetails>
              <StyledDetailWrapper>
                <div>Name:</div>
                {/* @ts-ignore */}
                <div>{pokemonData[0].name}</div>
              </StyledDetailWrapper>

              <StyledDetailWrapper>
                <div>Types:</div>
                {/* @ts-ignore */}
                {pokemonData[0].types.map(p => <div key={uuidv4()}>{p.type.name}</div>)}
              </StyledDetailWrapper>

              <StyledDetailWrapper>
                <div>Abilities:</div>
                {/* @ts-ignore */}
                {pokemonData[0].abilities.map(p => <div key={uuidv4()}>{p.ability.name}</div>)}
              </StyledDetailWrapper>

              <StyledDetailWrapper>
                <div>Weight:</div>
                {/* @ts-ignore */}
                <div>{pokemonData[0].weight}</div>
              </StyledDetailWrapper>
            </StyledDetails>
            
          </div>
        </StyledFeaturedCard>
      }

      {pokemonData && pokemonData.map(pokemon => (
        <StyledPokemonCard key={uuidv4()} onClick={() => selectPokemon(pokemon.id)}>
          <img 
            src={pokemon.sprites.front_default}
            alt="placeholder"
            width="150"
            height="150" 
          />
          <StyledPokemonName>{pokemon.name}</StyledPokemonName> 
        </StyledPokemonCard>
      ))} 
    </StyledPokemonCards>   
  )
};

export default PokemonCards;
