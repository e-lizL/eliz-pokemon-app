import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PokemonCardsProps, CardDetails } from '../interfaces';
import {
  MainCard,
  StyledDetailWrapper,
  StyledFeaturedImageWrapper,
  StyledDetails,
  StyledPokemonCards,
  StyledPokemonCard,
  StyledPokemonName,
  StyledFeaturedCard,
  StyledOverlay,
  StyledCloseButton,
} from ".././AppStyles";

const PokemonCards = ({ pokemonData }: PokemonCardsProps) => {

  const [featuredPokemon, setFeaturedPokemon] = useState(pokemonData[5])

  const [viewDetails, setViewDetails] = useState<CardDetails>({
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
    let selection = pokemonData.find(item => item.id === id);
    selection && setFeaturedPokemon(selection);
  };


  return (
   <StyledPokemonCards>
     {viewDetails.isOpened && 
        <>
        <StyledOverlay/>
        <StyledFeaturedCard>
          <StyledCloseButton onClick={() => setViewDetails({id: 0, isOpened: false})}>
            X
          </StyledCloseButton>
          <div>
              <StyledFeaturedImageWrapper>
                {featuredPokemon.sprites.other.dream_world.front_default 
                  && 
                  <img 
                    src={featuredPokemon.sprites.other.dream_world.front_default} 
                    alt="featured pokemon"
                  />
                }
              </StyledFeaturedImageWrapper>

              <StyledDetails>
                <StyledDetailWrapper>
                  <div>Name:</div>
                  {featuredPokemon.name 
                    && <div>{featuredPokemon.name}</div>
                  }
                </StyledDetailWrapper>

                <StyledDetailWrapper>
                  <div>Types:</div>
                  {featuredPokemon.types 
                    && featuredPokemon.types.map(p => <div key={uuidv4()}>{p.type.name}</div>)
                  }
                </StyledDetailWrapper>

                <StyledDetailWrapper>
                  <div>Abilities:</div>
                  {featuredPokemon.abilities
                    && featuredPokemon.abilities.map(p => <div key={uuidv4()}>{p.ability.name}</div>)
                  }
                </StyledDetailWrapper>

                <StyledDetailWrapper>
                  <div>Weight:</div>
                  {featuredPokemon.weight
                    && <div>{featuredPokemon.weight} kg</div>
                  }
                </StyledDetailWrapper>
              </StyledDetails>
              </div>
          </StyledFeaturedCard>
        </> 
      }

      {pokemonData && pokemonData.map(pokemon => (
        <StyledPokemonCard key={uuidv4()} onClick={() => selectPokemon(pokemon.id)}>
          <img 
            src={pokemon.sprites.front_default}
            alt="pokemon"
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
