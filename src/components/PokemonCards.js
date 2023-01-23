import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const StyledPokemonCards = styled.div`
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
  background: var(--light-gray);
  padding: 12px;
`;

const PokemonName = styled.div`
  margin-top: 8px;
`

const PokemonCards = ({ pokemonData }) => {
  
  return (
   <StyledPokemonCards>
       { pokemonData.map(pokemon => (
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