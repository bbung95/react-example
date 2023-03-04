import React from "react"
import styled from "styled-components"

const StyledOpenTab = styled.span`
    cursor: pointer;
    margin: 8px;
    ${(props) => props.isOpen && "font-weight: 800"}
`

const OpenClosedFilter = ({ isOpenMode, setIsOpenMode, title, size }) => {
    return (
        <StyledOpenTab
            isOpen={isOpenMode}
            role="button"
            onClick={setIsOpenMode}
        >
            {size} {title}
        </StyledOpenTab>
    )
}

export default OpenClosedFilter
