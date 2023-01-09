import React, { useEffect, useState } from "react";
import Cards from "../data/cards";
import Button from "./Button";
import BusinessCard from "./BusinessCard";
import "./CardRaffle.css";

function CardRaffle() {
    const [winner, setWinner] = useState([]);
    const [cards, setCards] = useState([]);

    /*
    1. 데이터 초기화
    - API를 호출
    */
    useEffect(() => {
        setCards(Cards);
    }, []);

    const raffle = () => {
        if (winner.length >= 3) {
            const names = winner.map((item) => item.name).join(",");
            alert(`이미 ${winner.length}의 추첨을 완료했습니다. 당첨자는 ${names} 입니다.`);
            return;
        }

        let raffleNum = Math.floor(Math.random() * cards.length);

        let card = cards[raffleNum];
        setWinner([...winner, cards[raffleNum]]);
        cardsRemove(card);
    };

    /*
    2. 명함 삭제
    */
    const cardsRemove = (card) => {
        setCards(cards.filter((item) => item.phoneNumber !== card.phoneNumber));
    };

    return (
        <div>
            {cards.length > 0 && <Button len={cards.length} hadlerCardRaffle={raffle} />} 당첨된 인원 : {winner.length}
            {winner.length > 0 && <BusinessCard info={winner[winner.length - 1]} />}
        </div>
    );
}

export default CardRaffle;
