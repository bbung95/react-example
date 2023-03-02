import React from "react"
import styled from "styled-components"
import Button from "./Button"

const StyledHeader = styled.div`
    display: flex;
    padding: 16px 32px;
    background: reg(246, 248, 250);
    box-shadow: inset 0 -1px 0 hsla(210, 18%, 87%, 1);
`

const Header = () => {
    return (
        <StyledHeader>
            <Button
                fontColor={"black"}
                fontSize={"14px"}
                backgroundColor={"transparent"}
            >
                Watch
            </Button>
            <Button
                fontColor={"black"}
                fontSize={"14px"}
                backgroundColor={"transparent"}
            >
                Fork
            </Button>
            <Button
                fontColor={"black"}
                fontSize={"14px"}
                backgroundColor={"transparent"}
            >
                Star
            </Button>
        </StyledHeader>
    )
}

export default Header
