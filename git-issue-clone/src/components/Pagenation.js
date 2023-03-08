import React, { useState } from "react"
import styled from "styled-components"

const StyledPagenationLayOut = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

const StyledButton = styled.button`
    margin: 10px;
    width: 80px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background: transparent;

    color: ${(props) => (props.isActive ? "#0075ca" : "#8c959f")};

    &:hover {
        border: 1px solid lightgray;
    }
`

const StyledNumbersContainer = styled.div`
    display: flex;
`

const StyledNumberButton = styled.button`
    width: 30px;
    height: 30px;
    margin: 2px;
    border: none;
    border-radius: 5px;
    color: ${(props) => props.isActive && "#fff"};
    background: ${(props) => (props.isActive ? "#0075ca" : "transparent")};

    &:hover {
        border: 1px solid lightgray;
    }
`

const Pagenation = ({ currentNumber, maxPageCount, handle }) => {
    const [pageInfo, setPageInfo] = useState({
        curNum: currentNumber || 1,
        maxPage: maxPageCount || 1,
    })

    const onClickPageNumber = (e) => {
        let num = Number(e.target.value)
        setPageInfo({ ...pageInfo, curNum: num })
        handle("page", num)
    }

    const prevPage = () => {
        if (pageInfo.curNum === 1) return
        setPageInfo({ ...pageInfo, curNum: pageInfo.curNum - 1 })
    }

    const nextPage = () => {
        if (pageInfo.curNum === 5) return
        setPageInfo({ ...pageInfo, curNum: pageInfo.curNum + 1 })
    }

    return (
        <StyledPagenationLayOut>
            <StyledButton
                onClick={() => prevPage()}
                isActive={pageInfo.curNum !== 1}
            >
                {"< Prev"}
            </StyledButton>
            <StyledNumbersContainer>
                {new Array(pageInfo.maxPage).fill(null).map((_, idx) => {
                    return (
                        <PagenationButton
                            key={idx + 1}
                            number={idx + 1}
                            isActive={idx + 1 === pageInfo.curNum}
                            onClick={onClickPageNumber}
                        />
                    )
                })}
            </StyledNumbersContainer>
            <StyledButton
                onClick={() => nextPage()}
                isActive={pageInfo.curNum !== pageInfo.maxPage}
            >
                {"Next >"}
            </StyledButton>
        </StyledPagenationLayOut>
    )
}

const PagenationButton = ({ onClick, number, isActive }) => {
    return (
        <StyledNumberButton
            isActive={isActive}
            type="button"
            onClick={onClick}
            value={number}
        >
            {number}
        </StyledNumberButton>
    )
}

export default Pagenation
