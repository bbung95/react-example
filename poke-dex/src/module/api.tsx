import axios from "axios"
import { API_URL } from "../constants/constant"

export interface PagesProps{
  page : number
}

export const fecthGetPokemonList = async (pages : PagesProps) => {
    const res = await axios.get(`${API_URL}/pokemon`, {
      params : {
        offset : pages.page * 20,
        limit : 20
      }
    });

    return res.data;    
}

export interface PokemonResponseProps {
  id : number,
  name : string,
  height : number,
  weight : number,
  sprites : {
    other? : {
      "official-artwork" : {
        front_default : string
      }
    }
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
  ],
  color : string
}

const fetchGetPokemonSpecies = async (name : string) => {
  const res = await axios.get(`${API_URL}/pokemon-species/${name}`);
  const data = res.data;

  return data;
}

export const fetchGetPokemon = async (name : string) => {
    const res = await axios.get(`${API_URL}/pokemon/${name}`);
    const data = res.data;

    const species = await fetchGetPokemonSpecies(name);
    const koreaName = species.names.find((item: { language: { name: string; }; }) => item.language.name === "ko").name;
    const color = species.color.name;

    return {
      id : data.id,
      name : koreaName,
      height : data.height,
      weight : data.weight,
      sprites : data.sprites,
      types : data.types,
      stats : data.stats,
      color
    }
}