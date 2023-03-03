import React from "react"
import styled from "styled-components"

const StyledBadge = styled.span`
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    border-radius: 2em;
    padding: 2px 7px;
    margin: 0 5px;
    color: #fff;

    background: ${(props) => props.color || "red"};
`

const Badge = ({ title, color }) => {
    return <StyledBadge color={color}>{title}</StyledBadge>
}

export default Badge
