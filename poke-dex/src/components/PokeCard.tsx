import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchGetPokemon, PokemonCardPorps } from '../module/api';
import { RootState } from '../store';
import PokeNameChip from './PokeNameChip';

const PokeCard = ({name} : {name : string}) => {

  const navigation = useNavigate();
  const [pokemon, setPokemon] = useState<PokemonCardPorps>({
    name : "",
    id : 0,
    color : "",
    images : {}
  });

  const imageType = useSelector((state : RootState) => state.imageType.type);
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  const handleOnClickCard = (name : string) => {
    navigation(`/pokemon/${name}`)
  }

  useEffect(() => {

    if(!isVisible){
      return
    }

    (async () => {
      const data = await fetchGetPokemon(name);
      setPokemon(data)
    })()

  }, [name, isVisible])

  return (
      <Card ref={ref} role="button" onClick={() => handleOnClickCard(name)}>
        <Header>
            <PokeNameChip number={pokemon.id} color={pokemon.color}>
              {pokemon.name}
            </PokeNameChip>
        </Header>
        {pokemon.images && <Image src={pokemon.images[imageType]}/>}
        <Desc><span>Pokémon</span></Desc>
      </Card>
  );
};

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  height: 20px;
  gap: 5px;
`

const Image = styled.img`
  width : 90%;
  margin: 0 auto;
`

const Desc = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;

  & > span{
    padding: 0 8px;
    font-size: 14px;
    font-weight: bold;
    border: 1px solid #c0c0c0;
    border-radius :30px;
  }
`

const Card = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 12px ;
  width: auto;
  height: 300px;
  border: 1px solid #c0c0c0;
  box-shadow: 1px 1px 3px 1px #c0c0c0;
  transition: all 0.2s;

  &:hover{
    scale: 1.07;
  }
`

export default PokeCard;