import React from 'react';
import styled from '@emotion/styled';
import PokeCard from './PokeCard';
import { SCREEN } from "../constants/constant";

const PokeCardList = () => {

  const arr = new Array(10).fill(1);

  return (
    <List>
      {arr.map((_, idx) => <PokeCard key={idx} />)}
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