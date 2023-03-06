import React from "react"
import styled from "styled-components"

const StyledNav = styled.div`
    display: flex;
    font-size: 14px;
    align-items: center;
    padding: 16px 32px;
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
    transition: all 0.3s;
    outline: none;

    &::placeholder {
        color: lightgray;
    }

    &:focus {
        width: 400px;
        background-color: #fff;

        &::placeholder {
            color: #000;
        }
    }
`

const StyledNavTabs = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    margin-left: 20px;

    & li {
        cursor: pointer;
        margin-right: 20px;
        color: #fff;
        font-size: 14px;
        font-weight: bold;

        &:hover {
            color: rgba(255, 255, 255, 0.7);
        }
    }
`

const Nav = () => {
    return (
        <StyledNav>
            <img src="./logo192.png" width={30} />
            <StyledNavInput type="text" placeholder="Search or jump to...." />
            <StyledNavTabs>
                <li>Pull request</li>
                <li>Issues</li>
                <li>Codespaces</li>
                <li>Marketplace</li>
                <li>Explore</li>
            </StyledNavTabs>
        </StyledNav>
    )
}

export default Nav
