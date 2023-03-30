import React from 'react';
import styled from "@emotion/styled"
import { SCREEN } from '../constants/constant';

const PageHeader = () => {
  return (
    <Header>
      <Title>Pokémon</Title>
      <Select>
        <option value="">Official</option>
        <option value="A">A</option>
        <option value="B">B</option>
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
`;

const Select = styled.select`
  display: flex;
  margin-left: auto;
  padding: 8px 12px;
  border-radius: 8px;
`

export default PageHeader;