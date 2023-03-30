import axios from "axios"
import { API_URL } from "../constants/constant"

export interface PokemonListResponseProps {
  count : number,
  next : string,
  results : []
}

export const fecthGetPokemonList = async () => {
    const res = await axios.get(`${API_URL}/pokemon`);

    return res.data;    
}

export interface PokemonResponseProps {
  id : number,
  name : string,
  height : number,
  weight : number,
  sprites : {
    front_default? : string
  },
  types? : [
    {
      type : {
        name : string
      }
    }?
  ],
  stats? : [
    {
      stat : {name  : string},
      base_stat : number
    }?
  ]
}

export const fetchGetPokemon = async (name : string) => {
    const res = await axios.get(`${API_URL}/pokemon/${name}`);
    const data = res.data;

    return {
      id : data.id,
      name : data.name,
      height : data.height,
      weight : data.weight,
      sprites : data.sprites,
      types : data.types,
      stats : data.stats
    }
}