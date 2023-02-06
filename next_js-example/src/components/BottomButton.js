import React from "react";
import styled from "styled-components";

const Button = styled.button`
    width: 100%;
    height: 50px;
    font-size: 16px;
    color: #fff;
    border-radius: 12px;
    border: 1px solid gray;
    background-color: #000;
`;

export default function BottomButton({ type, text, onClick }) {
    return (
        <Button type={type} onClick={onClick}>
            {text}
        </Button>
    );
}
