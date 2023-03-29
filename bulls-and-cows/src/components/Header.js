import React from "react";
import styled from "./Header.module.css";

const Header = ({ random, isSuccess }) => {
    return (
        <header className={styled.header}>
            <h1>숫자 야구 게임</h1>
            <div>{isSuccess ? random.map((item) => <span key={item}>{item}</span>) : "_ _ _ _"}</div>
        </header>
    );
};

export default Header;
