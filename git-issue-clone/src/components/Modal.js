import React, { useEffect, useState } from "react"
import styled from "styled-components"

const StyledModalLayout = styled.div`
    position: relative;
    width: 300px;
    border: 1px solid #d0d7de;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 8px 24px rgba(140, 149, 159, 0.2);
    z-index: 99;

    display: ${(props) => (props.isOpend ? "block" : "none")};
`

const StyledModalHeader = styled.div`
    position: absolute;
    width: 100%;
    border-bottom: 1px solid lightgray;
    background-color: inherit;
    z-index: 100;
`

const StyledHeader = styled.div`
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
        width: 90%;
        padding: 5px 12px;
        line-height: 16px;
        border: 1px solid #d0d7de;
        border-radius: 6px;
        box-shadow: none;
    }
`

const StyledModalBody = styled.div`
    padding-top: 80px;
    max-height: 320px;
    overflow: auto;
`

const StyledFilterItem = styled.div`
    position: relative;
    display: flex;
    padding: 5px 30px;
    font-size: 12px;
    border-bottom: 1px solid lightgray;
    cursor: pointer;

    & > div {
        margin-right: 10px;
        width: 16px;
        height: 16px;
        border: 1px solid lightgray;
        border-radius: 50%;
        background: ${(props) => props.color};
    }

    ${(props) =>
        props.isActive &&
        `&::before {
            content: "";
            position: absolute;
            left: 15px;
            top: 50%;
            width: 10px;
            height: 7px;
            border-left : 2px solid #000;
            border-bottom : 2px solid #000;
            transform : translate(-50%, -50%) rotateZ(-45deg);
        }`};
`

const Modal = ({
    opend,
    title,
    onClose,
    placeholder,
    searchDataList = [],
    searchHandle,
    searchParam,
}) => {
    const [searchValue, setSearchValue] = useState("")
    const [filteredData, setFilteredData] = useState(searchDataList)

    useEffect(() => {
        if (searchDataList.length > 0) {
            setFilteredData(
                searchDataList.filter((item) =>
                    item.name.includes(searchValue),
                ),
            )
        }
    }, [searchDataList, searchValue])

    const onChangeHandle = (e) => {
        setSearchValue(e.target.value)
    }

    const onClickHandle = (label) => {
        const labels = searchParam.labels

        if (!labels.includes(label)) {
            searchHandle("labels", [...labels, label])
        } else {
            searchHandle(
                "labels",
                labels.filter((item) => item !== label),
            )
        }
    }

    return (
        <StyledModalLayout isOpend={opend}>
            <StyledModalHeader>
                <StyledHeader>
                    <span>Filter by {title}</span>
                    <button type="button" onClick={onClose}>
                        X
                    </button>
                </StyledHeader>
                <StyledInput>
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={searchValue}
                        onChange={onChangeHandle}
                    />
                </StyledInput>
            </StyledModalHeader>
            <StyledModalBody>
                {filteredData &&
                    filteredData.map((item) => (
                        <FilterTab
                            key={item.id}
                            color={item.color}
                            onClick={onClickHandle}
                            isActive={searchParam.labels.includes(item.name)}
                        >
                            {item.name}
                        </FilterTab>
                    ))}
            </StyledModalBody>
        </StyledModalLayout>
    )
}
const FilterTab = ({ color, children, onClick, isActive }) => {
    return (
        <StyledFilterItem
            color={`#${color}`}
            onClick={() => onClick(children)}
            isActive={isActive}
        >
            {color && <div></div>}
            {children}
        </StyledFilterItem>
    )
}

export default Modal
