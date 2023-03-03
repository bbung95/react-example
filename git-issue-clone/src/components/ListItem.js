import React from "react"
import styled from "styled-components"
import Badge from "./Badge"
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

const ListItem = ({ checked, onChangeCheckBox, badges }) => {
    return (
        <ListItemLayout>
            <StyledTitle role="button">
                Issue Example
                {badges &&
                    badges.map((item, idx) => <Badge key={idx} {...item} />)}
                <StyledDescription># Desc</StyledDescription>
            </StyledTitle>
        </ListItemLayout>
    )
}

export default ListItem
