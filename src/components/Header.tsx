import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import axios from "axios";
import { useState, useEffect } from "react";
import {
  HeaderWrapper,
  MainCard,
  Divider,
  OuterCircle,
  InnerCircle,
  LeftTriangle,
  RightTriangle,
  CircleContainer,
  StyledDetailWrapper,
  StyledFeaturedImageWrapper,
  StyledDetails
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
              <StyledFeaturedImageWrapper>
                {/* @ts-ignore */}
                <img src={featuredPokemonData.sprites.other.dream_world.front_default}
                  alt="featured pokemon"
                />
               </StyledFeaturedImageWrapper>
              
              <StyledDetails>

                <StyledDetailWrapper>     
                    <div>Name:</div> 
                    {/* @ts-ignore */}
                    {featuredPokemonData.name}   
                </StyledDetailWrapper>

                <StyledDetailWrapper>     
                    <div>Types:</div> 
                    {/* @ts-ignore */}
                    {featuredPokemonData.types.map(p => <div key={uuidv4()}>{p.type.name}</div>)}   
                </StyledDetailWrapper>

                <StyledDetailWrapper>     
                    <div>Abilities:</div> 
                    {/* @ts-ignore */}
                    {featuredPokemonData.abilities.map(p => <div key={uuidv4()}>{p.ability.name}</div>)}   
                </StyledDetailWrapper>

                <StyledDetailWrapper>     
                    <div>Weight:</div> 
                    {/* @ts-ignore */}
                    <div>{featuredPokemonData.weight}</div>   
                </StyledDetailWrapper>

              </StyledDetails>
            </>
          } 
        </MainCard>
      </HeaderWrapper>
        
      <Divider/>

      <CircleContainer>
        <OuterCircle>
          <InnerCircle>
            <LeftTriangle onClick={handleDecrement} />
            <RightTriangle onClick={handleIncrement}/>
          </InnerCircle>
        </OuterCircle>
      </CircleContainer>
    </>
  )
};