import React, { ChangeEvent } from 'react';
import styled from "@emotion/styled"
import { POKEMON_IMAGE_TYPE, SCREEN } from '../constants/constant';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store';
import { changeImageType, PokemonImageType } from '../store/imageTypeSlice';

const PageHeader = () => {
  
  const type = useSelector((state : RootState) => state.imageType.type);
  const dispatch = useAppDispatch();

  const handleChange = (e : ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeImageType({
      type : e.target.value as PokemonImageType

    }))
  }

  return (
    <Header>
      <Title>
        <Link to="/">Pokémon</Link>
        </Title>
      <Select value={type} onChange={handleChange}>
        <option value={POKEMON_IMAGE_TYPE.OFFICIAL_ARTWORK}>Official</option>
        <option value={POKEMON_IMAGE_TYPE.DREAM_WORLD}>DreamWord</option>
        <option value={POKEMON_IMAGE_TYPE.FRONT_DEFAULT}>FrontDefault</option>
      </Select>
    </Header>
  );
};

const Header = styled.nav`
box-sizing: border-box;
  display: flex;
  padding: 16px 32px;
  margin-bottom: 16px;
  min-width: ${SCREEN['--sm-screen']};
  border-bottom : 1px solid #c0c0c0;
`;

const Title = styled.h1`
  margin: 0;
  color: #ffca09;
  text-shadow: -1px 0 blue, 0 2px blue, 1px 0 blue, 0 -1px blue;
  font-size: 32px;

  & a {
    color: inherit;
    text-decoration: none;
  }
`;

const Select = styled.select`
  display: flex;
  margin-left: auto;
  padding: 8px 12px;
  border-radius: 8px;
`

export default PageHeader;