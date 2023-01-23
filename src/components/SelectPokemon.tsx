import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import {
  StyledSelectLabel,
  StyledSelect,
  StyledSelectWrapper,
} from ".././AppStyles";

interface NamesProps {
  pokemonNames: string[];
  selectValue: string;
  setSelectValue: (value: string) => void; 
  setCircleButtonActive: (value: boolean) => void;
}

export default function SelectPokemon({ pokemonNames, selectValue, setSelectValue, setCircleButtonActive}: NamesProps) {

  const handleChange = (e: any) => {
    setSelectValue(e.target.value);
    setCircleButtonActive(false);
  }

  return(
    <>
      <StyledSelectWrapper>
        <StyledSelectLabel>
          Choose your Pokemon:
        </StyledSelectLabel>
        <StyledSelect value={selectValue} onChange={handleChange}>
          {pokemonNames && pokemonNames.map(name => <option key={uuidv4()} value={name}>{name}</option>)}
        </StyledSelect>
      </StyledSelectWrapper>  
    </>
  )
};