import React from 'react';
import styled from '@emotion/styled';
import { formatChipNumber } from '../utils/numberFormat';

interface ChipProps {
  color : string;
  number : number;
  children : string;
}

const PokeNumberChip = ({color, number, children} : ChipProps) => {

  return (
      <Title>
        <Chip color={color}>{formatChipNumber(number)}</Chip>
        {children}
      </Title>
  );
};

const Title = styled.div`
  display: flex;
  align-items: center;
  padding-right :8px;
  height: inherit;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid #c0c0c0;
  border-radius: 20px;
  gap: 5px;
`

const Chip = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 8px;
  height: inherit;
  font-size: 14px;
  font-weight: lighter;
  text-align: center;
  border-radius: 20px;
  background-color: ${(props) => props.color};
`

export default PokeNumberChip;