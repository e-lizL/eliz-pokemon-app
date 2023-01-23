import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import {
  StyledSelectLabel,
  StyledSelect,
  StyledSelectWrapper,
} from ".././AppStyles";

const StyledButton = styled.div`
  background: var(--pokemon-red);
  color: white;
  font-size: 1rem;
  padding: 12px 20px;
  border: none;
  border-radius: 20px;
`

interface NamesProps {
  pokemonNames: string[];
  selectValue: string;
  setSelectValue: (value: string) => void; 
}

export default function SelectPokemon({ pokemonNames, selectValue, setSelectValue }: NamesProps) {
  return(
    <>
      <StyledSelectWrapper>
        <StyledSelectLabel>
          Choose your Pokemon:
        </StyledSelectLabel>
        <StyledSelect value={selectValue} onChange={e => setSelectValue(e.target.value)}>
          {pokemonNames && pokemonNames.map(name => <option key={uuidv4()} value={name}>{name}</option>)}
        </StyledSelect>
        <StyledButton>Submit</StyledButton>
      </StyledSelectWrapper>  
    </>
  )
};