import React from "react";
import styled from "styled-components";

const Button = styled.button`
    width: 160px;
    height: 50px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid gray;
    background-color: lightgray;
`;

export default function BottomButton({ type, text, callback }) {
    return (
        <Button type={type} onClick={callback}>
            {text}
        </Button>
    );
}
