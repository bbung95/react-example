import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    padding: 5px 16px;
    border-radius: 6px;
    border: 1px solid rgba(27, 31, 36, 0.15);
    color: ${(props) => props.fontColor || "gray"};
    background: ${(props) => props.backgroundColor || "white"};
    font-size: ${(props) => props.fontSize || "16px"};

    &:hover {
        opacity: 0.7;
    }

    background: ${(props) => props.active && "#2da44e"};
`

const StyledIcon = styled.img`
    margin-right: 8px;
`

const Button = ({
    backgroundColor,
    fontColor,
    fontSize,
    src,
    children,
    onClick,
    active,
}) => {
    return (
        <StyledButton
            backgroundColor={backgroundColor}
            fontColor={fontColor}
            fontSize={fontSize}
            onClick={onClick}
            active={active ? active : false}
        >
            {src && <StyledIcon src={src} />}
            {children}
        </StyledButton>
    )
}

export default Button
