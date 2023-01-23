import {
  StyledSelectLabel,
  StyledSelect,
  StyledSelectWrapper,
} from ".././AppStyles";

export default function SelectPokemon() {
  return(
    <>
      <StyledSelectWrapper>
        <StyledSelectLabel>
          Choose your Pokemon:
        </StyledSelectLabel>
        <StyledSelect />
      </StyledSelectWrapper>  
    </>
  )
};