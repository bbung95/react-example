import React from "react"
import styled from "styled-components"

const StyledLayout = styled.div`
    padding: 8px 16px;
    border: 1px solid #d0d7de;
    border-bottom: none;
    background: #fff;
    display: flex;

    ${(props) => props.styleOption && props.styleOption}

    &:hover {
        background: rgb(246, 248, 250);
    }

    &:last-child {
        border-radius: 0 0 10px 10px;
        border-bottom: 1px solid #d0d7de;
    }
`

const StyledCheckBox = styled.input`
    margin-right: 8px;
    margin-top: 5px;
`

const ListItemLayout = ({ children, styleOption }) => {
    return (
        <StyledLayout styleOption={styleOption}>
            <StyledCheckBox type="checkbox" value={""} />
            {children}
        </StyledLayout>
    )
}

export default ListItemLayout
