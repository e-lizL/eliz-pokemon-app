import styled from "styled-components";
import { LeftArrow } from "@styled-icons/boxicons-solid/LeftArrow";
import { RightArrow } from "@styled-icons/boxicons-solid/RightArrow";

const HeaderWrapper = styled.div`
  background: #ce2222;
  padding: 80px 0 160px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainCard = styled.div`
  height: 200px;
  margin-top: 50px;
  margin: 0 auto;
  background: white;
  border-radius: 10px;
  border: 2px solid black;
  display: flex;
  padding: 0 20px;
`;

const Divider = styled.div`
  height: 40px;
  background: black;
`;

const CircleContainer = styled.div`
margin: -150px;
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
`;

const InnerCircle = styled(OuterCircle)`
  width: 210px;
  height: 210px;
  border: 4px solid black;
  justify-content: space-around;
`;

const LeftSelect = styled(LeftArrow)`
  color: black;
  height: 60px;
`;

const RightSelect = styled(RightArrow)`
  color: black;
  height: 60px;
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
  background: #f5f5f5;
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
  LeftSelect,
  RightSelect,
  StyledSelectLabel,
  StyledSelect,
  StyledSelectWrapper,
};
