import React from "react"
import styled from "styled-components"

const StyledNav = styled.div`
    display: flex;
    font-size: 14px;
    align-items: center;
    padding: 16px 32px;
    color: rgba(255, 255, 255, 0.7);
    background: #24292f;
`

const StyledNavInput = styled.input`
    margin-left: 20px;
    padding-left: 10px;
    height: 20px;
    width: 280px;
    border: none;
    border-radius: 5px;
    background-color: #000;
`

const Nav = () => {
    return (
        <StyledNav>
            <img src="./logo192.png" width={30} />
            <StyledNavInput type="text" placeholder="Search or jump to...." />
        </StyledNav>
    )
}

export default Nav
