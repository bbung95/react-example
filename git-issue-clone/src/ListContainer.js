import React from "react"
import styled from "styled-components"
import Button from "./components/Button"

const StyledListContainer = styled.div`
    padding: 0 32px;
    margin-top: 24px;
    height: 220px;
`

const ListContainer = () => {
    return (
        <StyledListContainer>
            <Button
                fontColor={"white"}
                fontSize={"14px"}
                backgroundColor={"green"}
            >
                New Issue
            </Button>
        </StyledListContainer>
    )
}

export default ListContainer
