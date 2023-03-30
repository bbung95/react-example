import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { SCREEN } from '../constants/constant';

const PokeDetail = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  return (
    <Body>
      <ImageContainer>
        <img src="https://via.placeholder.com/300"/>
      </ImageContainer>
      <Info>
        <h1>기본정보</h1>
        <ul>
          <li>
            <div>번호</div>
            <div>123</div>
          </li>
          <li>
            <div>이름</div>
            <div>123</div>
          </li>
          <li>
            <div>타입</div>
            <div>123</div>
          </li>
          <li>
            <div>키</div>
            <div>123</div>
          </li>
          <li>
            <div>몸무게</div>
            <div>123</div>
          </li>
        </ul>

        <h1>능력치</h1>
        <ul>
            <li>
              <div>hp</div>
              <div>123</div>
            </li>
            <li>
              <div>attack</div>
              <div>123</div>
            </li>
            <li>
              <div>defense</div>
              <div>123</div>
            </li>
            <li>
              <div>special-attack</div>
              <div>123</div>
            </li>
            <li>
              <div>special-defense</div>
              <div>123</div>
            </li>
            <li>
              <div>speed</div>
              <div>123</div>
            </li>
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

      & :first-child {
        padding: 6px 20px 6px 6px;
        min-width: 80px;
        font-size: 18px;
        color: gray;
      }

      & :last-child {
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
  border: 1px solid #c0c0c0;
  border-radius : 30px;
  box-shadow: 1px 1px 3px 1px #c0c0c0;
`

export default PokeDetail;