import styled from '@emotion/styled';
import React from 'react';
import PokeNameChip from './PokeNameChip';

const PokeCard = () => {
  return (
    <Card>
      <Header>
          <PokeNameChip number={"002"} color="green">
            이상해풀
          </PokeNameChip>
      </Header>
      <Image src="https://via.placeholder.com/200"/>
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

const Image = styled.img``

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
`

export default PokeCard;