import React, { useState } from "react"
import styled from "styled-components"
import Modal from "./Modal"

const StyledModalContainer = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
`

const StyledFilterItem = styled.div`
    position: relative;
`

const dataList = ["Bug", "Labels", "Ensd"]

const ListFilterItem = ({ children }) => {
    const [isOpend, setIsOpend] = useState(false)

    return (
        <StyledFilterItem>
            <span role="button" onClick={() => setIsOpend(true)}>
                {children} ▾
            </span>
            <StyledModalContainer>
                <Modal
                    title={children}
                    opend={isOpend}
                    onClose={() => setIsOpend(false)}
                    placeholder="Filter labels"
                    searchDataList={dataList}
                />
            </StyledModalContainer>
        </StyledFilterItem>
    )
}

export default ListFilterItem
