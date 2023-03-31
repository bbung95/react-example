/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import PokeCard from './PokeCard';
import { SCREEN } from "../constants/constant";
import { fecthGetPokemonList, fetchGetPokemon, PokemonResponseProps, PokemonResponseListProps } from '../module/api';
import useInfiniteScroll from 'react-infinite-scroll-hook';

const PokeCardList = () => {

  const [pokemons, setPokemons] = useState<PokemonResponseListProps>({
    count : 0,
    next : "",
    results : []
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [infiniteRef] = useInfiniteScroll({
    loading : false,
    hasNextPage : pokemons.next !== "",
    onLoadMore: () => {
      (async () => {
        const data = await fecthGetPokemonList(pokemons.next);
        setPokemons({
          ...data,
        results : [...pokemons.results, ...data.results, ]}
          );
      })() 
    },
    disabled : false,
    rootMargin: '0px 0px 600px 0px',
  });

  useEffect(() => {
    (async () => {
      const data = await fecthGetPokemonList();
      setPokemons(data);
    })()  
  },[])

  return (
    <List>
      {pokemons.results.length > 0 && pokemons.results.map((item : PokemonResponseProps) => <PokeCard key={item.name} info={item}/>)}
      <div ref={infiniteRef}>Loading....</div>
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