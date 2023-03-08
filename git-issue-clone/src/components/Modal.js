import React, { useEffect, useState } from "react"
import styled from "styled-components"

const StyledModalLayout = styled.div`
    width: 300px;
    border: 1px solid #d0d7de;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 8px 24px rgba(140, 149, 159, 0.2);
    z-index: 9999;

    display: ${(props) => (props.isOpend ? "block" : "none")};
`

const StyledModalHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 7px 7px 7px 16px;
    border-bottom: 1px solid #d0d7de;

    & > span {
        flex: 1;
        font-weight: 800;
        font-size: 12px;
    }

    & > button {
        border: none;
        background: transparent;
    }
`

const StyledInput = styled.div`
    padding: 8px;

    & > input {
        width: 100%;
        padding: 5px 12px;
        line-height: 16px;
        border: 1px solid #d0d7de;
        border-radius: 6px;
        box-shadow: none;
    }
`

const Modal = ({ opend, title, onClose, placeholder, searchDataList = [] }) => {
    const [searchValue, setSearchValue] = useState("")
    const [filteredData, setFilteredData] = useState(searchDataList)

    useEffect(() => {
        setFilteredData(
            searchDataList.filter((item) => item.includes(searchValue)),
        )
    }, [searchDataList, searchValue])

    const onChangeHandle = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <StyledModalLayout isOpend={opend}>
            <StyledModalHeader>
                <span>Filter by {title}</span>
                <button type="button" onClick={onClose}>
                    X
                </button>
            </StyledModalHeader>
            <StyledInput>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchValue}
                    onChange={onChangeHandle}
                />
            </StyledInput>
            {filteredData &&
                filteredData.map((item, idx) => <div key={idx}>{item}</div>)}
        </StyledModalLayout>
    )
}

export default Modal
