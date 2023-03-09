import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Button from "./components/Button"
import ListItem from "./components/ListItem"
import ListItemLayout from "./components/ListItemLayout"
import OpenClosedFilters from "./components/OpenClosedFilters"
import ListFilterItems from "./components/ListFilterItems"
import Pagenation from "./components/Pagenation"
import { fetchIssueList } from "./modules/api"
import { useNavigate } from "react-router-dom"

const StyledListContainer = styled.div`
    margin: 0 auto;
    margin-top: 12px;
    max-width: 1250px;
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

const ListContainer = () => {
    const [keyword, setKeyword] = useState("is:issue is:open")
    const [issueDatas, setIssueDatas] = useState([])
    const [searchParam, setSearchParam] = useState({
        page: 1,
        state: "open",
        perPage: 25,
        labels: [],
    })

    const navigator = useNavigate()

    const onChangeHandle = (e) => {
        setKeyword(e.target.value)
    }

    const handleSearchParam = (target, value) => {
        const newState = { ...searchParam }
        newState[target] = value

        setSearchParam({ ...newState })
    }

    useEffect(() => {
        ;(async () => {
            const { data } = await fetchIssueList(searchParam)
            setIssueDatas(data)
        })()
    }, [searchParam])

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
                    onClick={() => navigator("/issue/new")}
                >
                    New Issue
                </Button>
            </StyledTopContainer>
            <StyledContentsContainer>
                <OpenClosedFilters
                    handle={handleSearchParam}
                ></OpenClosedFilters>
                <ListItemLayout
                    styleOption={
                        "border-radius : 10px 10px 0 0; background : rgb(246, 248, 250);"
                    }
                >
                    <ListFilterItems
                        handle={handleSearchParam}
                        searchParam={searchParam}
                    />
                </ListItemLayout>
                <>
                    {issueDatas.map((item, idx) => (
                        <ListItem key={idx} info={item} />
                    ))}
                </>
            </StyledContentsContainer>
            <Pagenation
                currentNumber={searchParam.page}
                maxPageCount={5}
                handle={handleSearchParam}
            />
        </StyledListContainer>
    )
}

export default ListContainer
