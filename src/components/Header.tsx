import {
  HeaderWrapper,
  CardContainer,
  Divider,
  OuterCircle,
  InnerCircle,
  LeftSelect,
  RightSelect,
  CircleContainer
} from ".././AppStyles";


export default function Header() {
  return(
  <>
    <HeaderWrapper>
       <CardContainer />
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
  </>
  )
};