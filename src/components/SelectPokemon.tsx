import { v4 as uuidv4 } from 'uuid';
import {
  StyledSelectLabel,
  StyledSelect,
  StyledSelectWrapper
} from ".././AppStyles";


interface NamesProps {
  pokemonNames: string[];
  selectValue: string;
  setSelectValue: (value: string) => void;
  setActiveCircleSwitch: (value: boolean) => void;
}

export default function SelectPokemon({ pokemonNames, selectValue, setSelectValue, setActiveCircleSwitch }: NamesProps) {

  const handleChange = (e: any) => {
    setSelectValue(e.target.value);
    setActiveCircleSwitch(false);
  }

  return (
    <StyledSelectWrapper>
      <StyledSelectLabel>
        Choose your Pokemon:
      </StyledSelectLabel>
      <StyledSelect value={selectValue} onChange={handleChange}>
        {/* <option defaultValue=""></option> */}
        {pokemonNames && pokemonNames.sort().map(name => <option key={uuidv4()} value={name}>{name}</option>)} 
      </StyledSelect>
    </StyledSelectWrapper> 
  )
}
