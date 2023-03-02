import React from "react"
import styled from "styled-components"

const StyledTab = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 15px;
    padding: 5px 10px;
    border: none;
    background: transparent;
    white-space: nowrap;

    &:hover {
        background-color: #f1f3f5;
        border-radius: 5px;
    }
`

const StyledIcon = styled.img`
    margin-right: 8px;
`

const StyledLi = styled.li`
    list-style: none;
    margin-right: 10px;
    ${(prop) => prop.selected && "border-bottom : 2px solid red"};
`

const Tab = ({ children, src, selected, onClickHandler }) => {
    return (
        <StyledLi selected={selected}>
            <StyledTab onClick={onClickHandler}>
                {src && <StyledIcon src={src} />}
                {children}
            </StyledTab>
        </StyledLi>
    )
}

export default Tab
