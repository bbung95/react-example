import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Modal from "./Modal"
import { fetchIssueFilter } from "../modules/api"

const StyledModalContainer = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
`

const StyledFilterItem = styled.div`
    position: relative;
`

const dataList = ["Bug", "Labels", "Ensd"]

const ListFilterItem = ({ children, showModal, handle }) => {
    const modalOpen = () => {
        if (showModal === "") {
            handle(children)
        } else {
            modalClose()
        }
    }

    const modalClose = () => {
        handle("")
    }

    // useEffect(() => {
    //     ;(async function () {
    //         const res = await fetchIssueFilter(children)
    //         console.log(res)
    //     })()
    // }, [])

    return (
        <StyledFilterItem>
            <span role="button" onClick={modalOpen}>
                {children} ▾
            </span>
            <StyledModalContainer>
                <Modal
                    title={children}
                    opend={showModal === children}
                    onClose={modalClose}
                    placeholder="Filter labels"
                    searchDataList={dataList}
                />
            </StyledModalContainer>
        </StyledFilterItem>
    )
}

export default ListFilterItem
