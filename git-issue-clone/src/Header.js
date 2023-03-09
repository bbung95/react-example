import React from "react"
import styled from "styled-components"
import Button from "./components/Button"
import Tabs from "./components/Tabs"

const StyledHeader = styled.div`
    padding: 16px 32px 0px;
    background: reg(246, 248, 250);
    box-shadow: inset 0 -1px 0 hsla(210, 18%, 87%, 1);
`

const StyledCircleBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    width: 15px;
    height: 15px;
    font-size: 10px;
    background: lightgray;
    border-radius: 50%;
`

const StyledButtonList = styled.div`
    display: flex;
    margin-bottom: 20px;
    justify-content: flex-end;
`

const Header = () => {
    return (
        <StyledHeader>
            <StyledButtonList>
                <Button
                    fontColor={"black"}
                    fontSize={"14px"}
                    backgroundColor={"transparent"}
                    src="/icon/eye.svg"
                >
                    Watch
                </Button>
                <Button
                    fontColor={"black"}
                    fontSize={"14px"}
                    backgroundColor={"transparent"}
                    src="/icon/diagram-2.svg"
                >
                    Fork <StyledCircleBox>5</StyledCircleBox>
                </Button>
                <Button
                    fontColor={"black"}
                    fontSize={"14px"}
                    backgroundColor={"transparent"}
                    src="/icon/star.svg"
                >
                    Star
                </Button>
            </StyledButtonList>
            <Tabs />
        </StyledHeader>
    )
}

export default Header
