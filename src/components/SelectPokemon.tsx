import {
  StyledSelectLabel,
  StyledSelect,
  StyledSelectWrapper,
} from ".././AppStyles";

interface NamesProps {
  pokemonNames: string[];
}

export default function SelectPokemon({ pokemonNames }: NamesProps) {
  return(
    <>
      <StyledSelectWrapper>
        <StyledSelectLabel>
          Choose your Pokemon:
        </StyledSelectLabel>
        <StyledSelect>
          {pokemonNames && pokemonNames.map(name => <option value={name}>{name}</option>)}
        </StyledSelect>
      </StyledSelectWrapper>  
    </>
  )
};