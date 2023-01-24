import { useEffect, useState } from 'react';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { PokemonStats } from '../interfaces';
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
} from ".././AppStyles";

interface HeaderProps {
  selectValue: string;
  activeCircleSwitch: boolean;
  setActiveCircleSwitch: (value: boolean) => void;
}

export default function Header({ selectValue, activeCircleSwitch, setActiveCircleSwitch }: HeaderProps) {
  const [featuredPokemonData, setFeaturedPokemonData] = useState<PokemonStats>();
  const [pokemonIndex, setPokemonIndex] = useState(25)
  const [featuredPokemonUrl, setFeaturedPokemonUrl] = useState("https://pokeapi.co/api/v2/pokemon/pikachu");

  useEffect(() => {
     activeCircleSwitch ? 
      setFeaturedPokemonUrl(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`)
      :
      setFeaturedPokemonUrl(`https://pokeapi.co/api/v2/pokemon/${selectValue}`);
    
    const getFeaturedPokemon = async () => {
      const poke = await axios.get(featuredPokemonUrl);
      setFeaturedPokemonData(poke.data);
    }
    getFeaturedPokemon();
  }, [featuredPokemonUrl, pokemonIndex, selectValue]);

  const handleDecrement = () => {
    setActiveCircleSwitch(true);
    if (pokemonIndex === 1) {
      setPokemonIndex(150)
      return
    }
    setPokemonIndex(pokemonIndex - 1);
    setFeaturedPokemonUrl(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`);
  }

  const handleIncrement = () => {
    setActiveCircleSwitch(true);
    if (pokemonIndex === 150) {
      setPokemonIndex(1)
      return
    }
    setPokemonIndex(pokemonIndex + 1);
    setFeaturedPokemonUrl(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`);
  }

  return (
    <>
      <HeaderWrapper>
        <MainCard>
          {featuredPokemonData &&
            <>
              <StyledFeaturedImageWrapper>
                {featuredPokemonData.sprites.other.dream_world.front_default &&
                  <img src={featuredPokemonData.sprites.other.dream_world.front_default} 
                      alt="featured pokemon"
                  />
                }
              </StyledFeaturedImageWrapper>

              <StyledDetails>

                <StyledDetailWrapper>
                  <div>Name:</div>
                  {featuredPokemonData.name &&
                    <div>{featuredPokemonData.name}</div>
                  }
                </StyledDetailWrapper>

                <StyledDetailWrapper>
                  <div>Types:</div>
                  {featuredPokemonData.types 
                    && featuredPokemonData.types.map(p => <div key={uuidv4()}>{p.type.name}</div>)
                  }
                </StyledDetailWrapper>

                <StyledDetailWrapper>
                  <div>Abilities:</div>
                  {featuredPokemonData.abilities
                    && featuredPokemonData.abilities.map(p => <div key={uuidv4()}>{p.ability.name}</div>)}
                </StyledDetailWrapper>

                <StyledDetailWrapper>
                  <div>Weight:</div>
                  {featuredPokemonData.weight
                    && <div>{featuredPokemonData.weight} kg</div>
                  }
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
            <LeftTriangle onClick={handleDecrement}/>
            <RightTriangle onClick={handleIncrement}/>
          </InnerCircle>
        </OuterCircle>
      </CircleContainer>
    </>
  )
}
