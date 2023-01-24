export interface PokemonStats {
  abilities?: {
    ability: {
      name: string;
    }
  }[];
  types?: {
    type: {
      name: string;
    }
  }[];
  id: number;
  name: string;
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      }
    }
  };
  weight: number;
  }

  export interface HeaderProps {
    activeCircleSwitch: boolean;
    setActiveCircleSwitch: (value: boolean) => void;
    pokemonData: PokemonStats[];
    isLoading: boolean;
  }
  
  export interface PokemonCardsProps {
    pokemonData: PokemonStats[];
  }
  
  export interface CardDetails {
    id: number;
    isOpened: boolean;
  }
  
  export interface SelectProps {
    pokemonData: PokemonStats[];
    selectValue: string;
    setSelectValue: (value: string) => void;
    setActiveCircleSwitch: (value: boolean) => void;
  }
