import { v4 as uuidv4 } from 'uuid';
import {
  StyledSelectLabel,
  StyledSelect,
  StyledSelectWrapper
} from ".././AppStyles";
import { PokemonStats } from '../interfaces';

interface SelectProps {
  pokemonData: PokemonStats[];
  selectValue: string;
  setSelectValue: (value: string) => void;
  setActiveCircleSwitch: (value: boolean) => void;
}

export default function SelectPokemon({ pokemonData, selectValue, setSelectValue, setActiveCircleSwitch }: SelectProps) {

  const handleChange = (e: any) => {
    setSelectValue(e.target.value);
    setActiveCircleSwitch(false);
  }

  return (
    <StyledSelectWrapper>
      <StyledSelectLabel>Choose your Pokemon: </StyledSelectLabel>
      <StyledSelect value={selectValue} onChange={handleChange}>
      {pokemonData && pokemonData.map(pokemon => <option key={uuidv4()} value={pokemon.name}>{pokemon.name}</option>)} 
      </StyledSelect>
    </StyledSelectWrapper> 
  )
}
