import React, { useState } from "react"
import styled from "styled-components"
import Button from "./components/Button"
import ListItem from "./components/ListItem"
import ListItemLayout from "./components/ListItemLayout"

const StyledListContainer = styled.div`
    padding: 0 32px;
    margin-top: 24px;
    height: 220px;
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
`

const StyledFilterList = styled.div`
    padding: 16px;
    display: flex;
    align-items: center;

    & > span {
        padding: 0 16px;
        line-height: 21px;
    }
`

const ListContainer = () => {
    const [keyword, setKeyword] = useState("is:issue is:open")

    const onChangeHandle = (e) => {
        setKeyword(e.target.value)
    }

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
                <ListItemLayout
                    styleOption={
                        "border-radius : 10px 10px 0 0; background : rgb(246, 248, 250);"
                    }
                >
                    <StyledFilterList>
                        <span>Author</span>
                        <span>Label</span>
                        <span>Projects</span>
                        <span>Milestones</span>
                        <span>Assignee</span>
                        <span>Sort</span>
                    </StyledFilterList>
                </ListItemLayout>
                <div>
                    <ListItem></ListItem>
                </div>
            </StyledContentsContainer>
        </StyledListContainer>
    )
}

export default ListContainer
