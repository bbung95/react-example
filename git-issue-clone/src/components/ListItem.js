import React from "react"
import styled from "styled-components"
import ListItemLayout from "./ListItemLayout"

const StyledTitle = styled.div`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    cursor: pointer;

    &:hover {
        color: #0969da;
    }
`

const StyledDescription = styled.div`
    color: rgb(87, 96, 106);
    font-size: 12px;
`

const ListItem = ({ checked, onChangeCheckBox }) => {
    return (
        <ListItemLayout>
            <StyledTitle>
                Issue Example
                <StyledDescription># Desc</StyledDescription>
            </StyledTitle>
        </ListItemLayout>
    )
}

export default ListItem
