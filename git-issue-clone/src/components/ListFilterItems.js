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
const ListFilterItems = () => {
    return (
        <StyledFilterList>
            <ListFilterItem>Author</ListFilterItem>
            <ListFilterItem>Label</ListFilterItem>
            <ListFilterItem>Projects</ListFilterItem>
            <ListFilterItem>Milestones</ListFilterItem>
            <ListFilterItem>Assignee</ListFilterItem>
            <ListFilterItem>Sort</ListFilterItem>
        </StyledFilterList>
    )
}

export default ListFilterItems
