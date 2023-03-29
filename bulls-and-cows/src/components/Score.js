import React from "react";

const Score = ({ idx, info }) => {
    const { answer, strike, ball } = info;

    return (
        <li>
            {idx}. {answer} (strike: {strike}, ball: {ball})
        </li>
    );
};

export default Score;
