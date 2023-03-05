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

const ListItem = ({ info, checked, onChangeCheckBox }) => {
    const { title, labels, html_url, number, created_at, updated_at, user } =
        info

    const desc = `#${number} ${updated_at || created_at} by ${user.login}`

    return (
        <ListItemLayout>
            <StyledTitle
                role="button"
                onClick={() => (location.href = html_url)}
            >
                {title}
                {labels &&
                    labels.map((item) => <Badge key={item.id} {...item} />)}
                <StyledDescription>{desc}</StyledDescription>
            </StyledTitle>
        </ListItemLayout>
    )
}

export default ListItem
