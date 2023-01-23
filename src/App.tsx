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
          <h1>Hello from React</h1>
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

    </>
  );
}

export default App;
