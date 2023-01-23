import styled from "styled-components";
import { LeftArrow } from "@styled-icons/boxicons-solid/LeftArrow";
import { RightArrow } from "@styled-icons/boxicons-solid/RightArrow";

const HeaderWrapper = styled.div`
  background: var(--pokemon-red);
  padding: 80px 0 160px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainCard = styled.div`
  margin-top: 50px;
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
  padding: 200px 0 80px;
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
};
