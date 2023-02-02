import React from "react";
import styled from "styled-components";

export default function BottomButton({ text, callback }) {
    const Button = styled.button`
        width: 160px;
        height: 50px;
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid gray;
        background-color: lightgray;
    `;

    return <Button onClick={callback}>{text}</Button>;
}
