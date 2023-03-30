/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import PokeCard from './PokeCard';
import { SCREEN } from "../constants/constant";
import { fecthGetPokemonList, fetchGetPokemon, PokemonResponseProps } from '../module/api';

const PokeCardList = () => {

  const [pokemons, setPokemons] = useState<PokemonResponseProps []>([]);
  const [pages, setPages] = useState({page : 0})
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadingRef = useRef<any>();

//   const observerScroll = () => {
//     let options = {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.5,
//     };
//     let observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(async (entry) => {
//             // 관찰 대상이 viewport 안에 들어온 경우
//             if (entry.isIntersecting) {
              
//               if(isLoading){
//                 console.log(1)

//                 setPages({page : pages.page + 1});

//                 // console.log(pages)

//                 // const res = await await fecthGetPokemonList(pages);

//                 // console.log(res);
//                 // 중지
//                 // if (res.articles.length < pageInfo.pageSize) {
//                 //     observer.unobserve(entry.target);
//                 //     entry.target.remove();
//                 // }

//                 setIsLoading(false);
//               }
//             }
//         });
//     }, options);
    
//     observer.observe(loadingRef.current);
// }

  useEffect(() => {
    (async () => {
      const data = await fecthGetPokemonList(pages);
      const newList = [...pokemons];

      for(let value of data.results){
        newList.push(await fetchGetPokemon(value.name));
      }

      setPokemons(newList);
      // observerScroll();
    })()  
  },[pages])

  return (
    <List>
      {pokemons.length > 0 && pokemons.map((item : PokemonResponseProps) => <PokeCard key={item.name} info={item}/>)}
      <div ref={loadingRef}>Loading....</div>
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