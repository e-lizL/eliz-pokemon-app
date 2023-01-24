import styled from "styled-components";
import { LeftArrow } from "@styled-icons/boxicons-solid/LeftArrow";
import { RightArrow } from "@styled-icons/boxicons-solid/RightArrow";

const HeaderWrapper = styled.div`
  background: var(--pokemon-red);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 50px 0 150px;
  height: auto;
`;

const MainCard = styled.div`
  margin: 0 auto;
  background: white;
  border-radius: 10px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

const StyledFeaturedImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  img {
    height: 300px;
    width: 300px;
  }
`;

const StyledDetails = styled.div`
  margin-top: 40px;
`;

const StyledDetailWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;
  div:first-child {
    font-family: 'Black Han Sans', sans-serif;
  }
`;

const Divider = styled.div`
  height: 40px;
  background: black;
`;

const CircleContainer = styled.div`
  margin: -150px auto;
  display: flex;
`;

const StyledButton = styled.button`
  background: var(--pokemon-red);
  color: var(--off-white);
  padding: 15px 20px;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
`;

const OuterCircle = styled.div`
  background: white;  
  width: 250px;
  height: 250px;
  border-radius: 100%;
  margin: 0 auto;
  border: 7px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
`;

const InnerCircle = styled(OuterCircle)`
  width: 210px;
  height: 210px;
  border: 4px solid black;
  justify-content: space-around;
`;

const LeftTriangle = styled(LeftArrow)`
  color: black;
  height: 60px;
  &:hover, &:active, &:focus {
    color: red;
  }
`;

const RightTriangle = styled(RightArrow)`
  color: black;
  height: 60px;
  &:hover, &:active, &:focus {
    color: red;
  }
`;

const StyledSelectLabel = styled.label`
  font-size: 1.2rem;
  padding-left: 10px;
`;

const StyledSelect = styled.select`
  height: 35px;
  width: 200px;
  padding: 0 20px;
  display: flex;
  font-size: 1.2rem;
  border-radius: 20px;
  background: var(--off-white);
`;

const StyledSelectWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const StyledPokemonCards = styled.div`
  width: 98%;
  margin: 200px auto 50px;
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
  &:hover, &:active, &:focus {
    background: var(--pokemon-red);
  }
`;

const StyledPokemonName = styled.div`
  margin-top: 8px;
`;

const StyledFeaturedCard = styled(MainCard)`
  position: fixed;
  top: 40%;
  left: 50%;
  width: 30em;
  height: 36em;
  margin-top: -18em;
  margin-left: -18em;
  z-index: 99;
`;

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.8;
  height: 100%;
  width: 100%;
  z-index: 90;
`;

const StyledCloseButton = styled.button`
  padding: 8px;
  font-size: 1.1rem;
  width: 40px;
`;

const StyledLoadingMessage = styled.div`
  font-size: 1.1rem;
  padding: 40px 0;
  font-family: 'Black Han Sans', sans-serif;
`;

export {
  HeaderWrapper,
  MainCard,
  Divider,
  CircleContainer,
  OuterCircle,
  InnerCircle,
  LeftTriangle,
  RightTriangle,
  StyledSelectLabel,
  StyledSelect,
  StyledSelectWrapper,
  StyledDetailWrapper,
  StyledFeaturedImageWrapper,
  StyledDetails,
  StyledButton,
  StyledPokemonCards,
  StyledPokemonCard,
  StyledPokemonName,
  StyledFeaturedCard,
  StyledCloseButton,
  StyledOverlay,
  StyledLoadingMessage
};
