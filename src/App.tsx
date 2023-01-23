import ApiData from './components/apiData.js';

import {
  HeaderWrapper,
  CardContainer,
  Divider,
  OuterCircle,
  InnerCircle,
  LeftSelect,
  RightSelect,
  StyledSelectLabel,
  StyledSelect,
  StyledSelectWrapper,
  CircleContainer
} from "./AppStyles";

function App() {
  return (
    <>
      <HeaderWrapper>
        <CardContainer>
        </CardContainer>
      </HeaderWrapper>
      
      <Divider/>

      <CircleContainer>
        <OuterCircle>
          <InnerCircle>
            <LeftSelect />
            <RightSelect />
          </InnerCircle>
        </OuterCircle>
      </CircleContainer>

      <StyledSelectWrapper>
        <StyledSelectLabel>
          Choose your Pokemon:
        </StyledSelectLabel>
        <StyledSelect />
      </StyledSelectWrapper> 

      <ApiData/>

      

    </>
  );
}

export default App;
