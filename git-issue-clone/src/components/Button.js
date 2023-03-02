import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
    padding: 5px 16px;
    border-radius: 6px;
    border: 1px solid rgba(27, 31, 36, 0.15);
    color: ${(props) => props.fontColor || "gray"};
    background: ${(props) => props.backgroundColor || "white"};
    font-size: ${(props) => props.fontSize || "16px"};
`

const Button = ({ backgroundColor, fontColor, fontSize, children }) => {
    return (
        <StyledButton
            backgroundColor={backgroundColor}
            fontColor={fontColor}
            fontSize={fontSize}
        >
            {children}
        </StyledButton>
    )
}

export default Button
