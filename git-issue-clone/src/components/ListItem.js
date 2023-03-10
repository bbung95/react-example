import React from "react"
import styled from "styled-components"
import Badge from "./Badge"
import ListItemLayout from "./ListItemLayout"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)

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
    const {
        title,
        labels,
        html_url,
        number,
        created_at,
        closed_at,
        user,
        state,
    } = info

    const date = state === "open" ? created_at : closed_at
    const status = state === "open" ? "opend" : "closed"

    return (
        <ListItemLayout>
            <StyledTitle
                role="button"
                onClick={() => (location.href = html_url)}
            >
                {title}
                {labels &&
                    labels.map((item) => <Badge key={item.id} {...item} />)}
                <StyledDescription>
                    #{number} {status} {dayjs(date).fromNow()} by {user.login}
                </StyledDescription>
            </StyledTitle>
        </ListItemLayout>
    )
}

export default ListItem
