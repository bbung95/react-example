import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Button from "./components/Button"
import ListItem from "./components/ListItem"
import ListItemLayout from "./components/ListItemLayout"
import OpenClosedFilters from "./components/OpenClosedFilters"
import ListFilterItems from "./components/ListFilterItems"
import Pagenation from "./components/Pagenation"
import api from "./modules/api"

const StyledListContainer = styled.div`
    padding: 0 32px;
    margin-top: 24px;
    height: auto;
`

const StyledTopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 40px;
`

const StyledSearchBar = styled.div`
    position: relative;
    width: 60%;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 5px;
        width: 30px;
        height: 30px;
        z-index: 1;
        background-image: url("icon/search.svg");
        background-position: center;
        background-repeat: no-repeat;
    }
`

const StyledSearchInput = styled.input`
    position: relative;
    padding-left: 35px;
    margin-right: auto;
    width: inherit;
    height: 30px;
    color: #57606a;
    background-color: #f6f8fa;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    box-shadow: none;

    &:focus {
        outline: 1px solid blue;
    }
`

const StyledContentsContainer = styled.div`
    margin-top: 20px;
    margin-left: 40px;
`

const dataList = [
    { color: "#d73a4a", title: "Bug" },
    { color: "#0075ca", title: "documentation" },
    { color: "#a2eeef", title: "enhancement" },
]

const ListContainer = () => {
    const [keyword, setKeyword] = useState("is:issue is:open")
    const [issueDatas, setIssueDatas] = useState([])

    const onChangeHandle = (e) => {
        setKeyword(e.target.value)
    }

    useEffect(() => {
        ;(async () => {
            const res = await api()
            setIssueDatas(res.data)
        })()
    }, [])

    return (
        <StyledListContainer>
            <StyledTopContainer>
                <StyledSearchBar>
                    <StyledSearchInput
                        type="text"
                        value={keyword}
                        onChange={onChangeHandle}
                    />
                </StyledSearchBar>
                <Button
                    fontColor={"white"}
                    fontSize={"14px"}
                    backgroundColor={"green"}
                >
                    New Issue
                </Button>
            </StyledTopContainer>
            <StyledContentsContainer>
                <OpenClosedFilters></OpenClosedFilters>
                <ListItemLayout
                    styleOption={
                        "border-radius : 10px 10px 0 0; background : rgb(246, 248, 250);"
                    }
                >
                    <ListFilterItems />
                </ListItemLayout>
                <>
                    {issueDatas.map((item, idx) => (
                        <ListItem key={idx} info={item} />
                    ))}
                </>
            </StyledContentsContainer>
            <Pagenation currentNumber={1} maxPageCount={5} />
        </StyledListContainer>
    )
}

export default ListContainer
