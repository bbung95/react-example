import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { SCREEN } from '../constants/constant';
import { fetchGetPokemon, PokemonResponseProps } from '../module/api';
import { formatChipNumber } from '../utils/numberFormat';

const PokeDetail = () => {

  const location = useLocation();
  const name = location.pathname.split("/")[2];

  const [pokemon, setPokemon] = useState<PokemonResponseProps>(
    {
      id : 0,
      name : "",
      height : 0,
      weight : 0,
      sprites : {},
      types : [],
      stats : [],
      color : ""
    }
  );

  useEffect(() => {
    (async () => {
      const data = await fetchGetPokemon(name);
      setPokemon(data);
    })()
  },[name])

  return (
    <Body>
      <ImageContainer>
        <img src={pokemon.sprites.other?.['official-artwork'].front_default} alt=""/>
      </ImageContainer>
      <Info>
        <h1>기본정보</h1>
        <ul>
          <li>
            <div>번호</div>
            <div>{formatChipNumber(pokemon.id)}</div>
          </li>
          <li>
            <div>이름</div>
            <div>{pokemon.name}</div>
          </li>
          <li>
            <div>타입</div>
            <div>{pokemon.types?.map(item => item?.type.name+" ")}</div>
          </li>
          <li>
            <div>키</div>
            <div>{pokemon.height}</div>
          </li>
          <li>
            <div>몸무게</div>
            <div>{pokemon.weight}</div>
          </li>
        </ul>

        <h1>능력치</h1>
        <ul>
            {pokemon.stats?.map(item => 
              <li key={item?.stat.name}>
                <div>{item?.stat.name}</div>
                <div>{item?.base_stat}</div>
              </li>)}
        </ul>
      </Info>
    </Body>
  );
};

const ImageContainer = styled.div`
  border-bottom: 1px solid lightgrey;
  & > img {
    display: block;
    margin : 0 auto;
    height: 300px;
  }
`

const Info = styled.div`
  text-align: left;

  & h1 {
    font-size: 26px;;
  }

  & ul {
    list-style: none;
    margin: 0 20px;
    padding: 0;

    & li {
      display: flex;
      border-bottom: 1px solid lightgrey;

      & :first-of-type {
        padding: 6px 20px 6px 6px;
        min-width: 80px;
        font-size: 18px;
        color: gray;
      }

      & :last-of-type {
        font-size: 20px;
      }
    }
  }
`

const Body = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 40px;
  max-width: ${SCREEN['--lg-screen']};
  min-width: ${SCREEN['--sm-screen']};
  border: 1px solid #c0c0c0;
  border-radius : 30px;
  box-shadow: 1px 1px 3px 1px #c0c0c0;
`

export default PokeDetail;