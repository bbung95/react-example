import React, { useState } from "react"
import styled from "styled-components"
import ListFilterItem from "./ListFilterItem"
import Modal from "./Modal"

const StyledFilterList = styled.div`
    padding: 16px;
    display: flex;
    align-items: center;

    & > div > span {
        position: relative;
        padding: 0 16px;
        line-height: 21px;
        cursor: pointer;
        color: #57606a;
        white-space: nowrap;

        &:hover {
            color: #000;
        }
    }
`

const filterItems = [
    // "Author",
    "Label",
    // "Projects",
    // "Milestones",
    // "Assignee",
    // "Sort",
]

const ListFilterItems = ({ handle, searchParam }) => {
    const [showModal, setShowModal] = useState("")

    return (
        <StyledFilterList>
            {filterItems.map((item) => (
                <ListFilterItem
                    key={item}
                    showModal={showModal}
                    handle={setShowModal}
                    searchHandle={handle}
                    searchParam={searchParam}
                >
                    {item}
                </ListFilterItem>
            ))}
        </StyledFilterList>
    )
}

export default ListFilterItems
