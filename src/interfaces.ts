export interface PokemonStats {
  abilities: {
    ability: {
      name: string;
    }
  }[];
  types: {
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
  };
