import React from "react"
import styled from "styled-components"

const StyledBadge = styled.span`
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    border-radius: 2em;
    padding: 2px 7px;
    margin: 0 5px;
    color: ${(props) => (props.color === "b60205" ? "#fff" : "#000")};
    background: #${(props) => props.color};
`

const Badge = ({ name, color }) => {
    return <StyledBadge color={color}>{name}</StyledBadge>
}

export default Badge
