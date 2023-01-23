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
  selectValue: string;
}

export default function Header({ selectValue }: HeaderProps) {
  const [featuredPokemonData, setFeaturedPokemonData] = useState();
  const [pokemonIndex, setPokemonIndex] = useState(1);
  const pokemonUrlIndex = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`;
  const pokemonUrlName = `https://pokeapi.co/api/v2/pokemon/${selectValue}`;
  

  useEffect(() => {
    const getFeaturedPokemon = async () => {
      if (selectValue) {
      const poke = await axios.get(pokemonUrlName);
      setFeaturedPokemonData(poke.data);
      return
    }
    const poke = await axios.get(pokemonUrlIndex);
    setFeaturedPokemonData(poke.data);
  }
    getFeaturedPokemon();
  }, [pokemonUrlIndex, pokemonUrlName, selectValue]);

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