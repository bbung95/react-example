import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PokeCard from './PokeCard';
import { SCREEN } from "../constants/constant";
import { fecthGetPokemonList, PokemonListResponseProps } from '../module/api';

const PokeCardList = () => {

  const [pokemons, setPokemons] = useState<PokemonListResponseProps>({
    count : 0,
    next : "",
    results : []
  });

  useEffect(() => {
    (async () => {
      const data = await fecthGetPokemonList();
      setPokemons(data);
    })()  
  })

  return (
    <List>
      {pokemons.results.length > 0 && pokemons.results.map((item : {name : string}) => <PokeCard key={item.name} name={item.name}/>)}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-areas: 
  "1fr 1fr 1fr 1fr";
  width: ${SCREEN['--lg-screen']};
  text-align: center;
  margin: 0 auto;
  padding: 0;
  flex: row;
  gap: 16px;

  @media screen and (max-width: ${SCREEN['--lg-screen']}) {
    grid-template-areas: 
    "1fr 1fr 1fr";
    width: ${SCREEN['--md-screen']}
  }

  @media screen and (max-width: ${SCREEN['--md-screen']}) {
    grid-template-areas: 
    "1fr 1fr";
    width: ${SCREEN['--sm-screen']}
  }
`

export default PokeCardList;