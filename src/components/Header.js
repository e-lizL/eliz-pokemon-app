import axios from "axios";
import { useState, useEffect } from "react";
import {
  HeaderWrapper,
  MainCard,
  Divider,
  OuterCircle,
  InnerCircle,
  LeftSelect,
  RightSelect,
  CircleContainer
} from "../AppStyles";

export default function Header({ featuredPokemonUrl }) {
  const [featuredPokemonData, setFeaturedPokemonData] = useState();

  useEffect(() => {
    const getFeaturedPokemon = async () => {
      const poke = await axios.get(featuredPokemonUrl);
      setFeaturedPokemonData(poke.data);
    }
    getFeaturedPokemon();
  }, [featuredPokemonUrl]);

  console.log(featuredPokemonData);
  return(
    <>
      <HeaderWrapper>
        <MainCard>
          {featuredPokemonData &&
            <img
              src={featuredPokemonData.sprites.front_default}
              alt="featured pokemon"
            />
          }  
        </MainCard>
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