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

interface HeaderProps {
  featuredPokemonUrl: string;
  setPokemonIndex: (value: number) => void;
  pokemonIndex: number;
}

export default function Header({ featuredPokemonUrl, pokemonIndex, setPokemonIndex }: HeaderProps) {
  const [featuredPokemonData, setFeaturedPokemonData] = useState();

  useEffect(() => {
    const getFeaturedPokemon = async () => {
      const poke = await axios.get(featuredPokemonUrl);
      setFeaturedPokemonData(poke.data);
    }
    getFeaturedPokemon();
  }, [featuredPokemonUrl]);

  const handleDecrement = () => {
    if (pokemonIndex === 1) {
      setPokemonIndex(150)
      return;
    }
    setPokemonIndex(pokemonIndex-1);
  }
  
  const handleIncrement = () => {
    if (pokemonIndex === 150) {
      setPokemonIndex(1)
      return;
    }
    setPokemonIndex(pokemonIndex+1);
  }


  return(
    <>
      <HeaderWrapper>
        <MainCard>
          {featuredPokemonData &&
            <>
              {/* @ts-ignore */}
              <img src={featuredPokemonData.sprites.other.dream_world.front_default}
                alt="featured pokemon"
              />
              {/* @ts-ignore */}
              <h3>{featuredPokemonData.name}</h3> 
            </>
          } 
        </MainCard>
      </HeaderWrapper>
        
      <Divider/>

      <CircleContainer>
        <OuterCircle>
          <InnerCircle>
            <LeftSelect onClick={handleDecrement} />
            <RightSelect onClick={handleIncrement}/>
          </InnerCircle>
        </OuterCircle>
      </CircleContainer>
    </>
  )
};