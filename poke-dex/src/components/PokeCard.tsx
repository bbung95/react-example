import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonResponseProps } from '../module/api';
import PokeNameChip from './PokeNameChip';

const PokeCard = ({info} : {info : PokemonResponseProps}) => {

  const navigation = useNavigate();

  const handleOnClickCard = (name : string) => {
    navigation(`/pokemon/${name}`)
  }

  return (
      <Card role="button" onClick={() => handleOnClickCard(info.name)}>
        <Header>
            <PokeNameChip number={info.id} color={info.color}>
              {info.name}
            </PokeNameChip>
        </Header>
        <Image src={info.sprites.other?.['official-artwork'].front_default}/>
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

  &:hover{
    background-color: #e4e4e4;
  }
`

export default PokeCard;