import React, { useState } from "react"
import styled from "styled-components"
import Button from "./components/Button"

const StyledAddContainer = styled.div`
    box-sizing: content-box;
    margin: 0 auto;
    margin-top: 30px;
    max-width: 1250px;
    height: auto;
`

const StyledContentBox = styled.div`
    width: 100%;
    height: auto;
    border: 1px solid lightgray;
    border-radius: 6px;
`

const StyledHeader = styled.div`
    padding: 10px;

    & > input {
        width: calc(1230px - 10px);
        padding-left: 10px;
        height: 26px;
        background: #f6f8fa;
        border: 1px solid lightgray;
        border-radius: 6px;
    }
`

const StyledBody = styled.div`
    padding: 10px;

    & > textarea {
        width: calc(1230px - 20px);
        padding: 10px;
        height: 200px;
        background: #f6f8fa;
        border: 1px solid lightgray;
        border-radius: 6px;
    }
`

const StyledTabs = styled.div`
    position: relative;
    display: flex;
    margin-bottom: 10px;

    &::before {
        content: "";
        position: absolute;
        left: -10px;
        bottom: 0;
        width: 1250px;
        height: 1px;
        background: lightgray;
    }
`

const StyledTab = styled.div`
    padding: 10px;
    font-size: 12px;
    cursor: pointer;
    border: 1px solid #fff;

    ${(props) =>
        props.active &&
        `border: 1px solid lightgray;
        border-bottom: 1px solid #fff;
        z-index: 999;
        border-radius: 6px 6px 0 0;`}
`

const StyledFooter = styled.div`
    display: flex;
    margin-top: 5px;
    align-items: center;
    justify-content: flex-end;
`

const IssueAdd = () => {
    const [acctiveTab, setActiveTab] = useState("Write")
    const [formData, setFormData] = useState({
        title: "",
        contents: "",
    })

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const formSubmit = () => {
        if (formData.title === "") return

        console.log(formData)
    }

    return (
        <StyledAddContainer>
            <StyledContentBox>
                <StyledHeader>
                    <input
                        name="title"
                        type="text"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleOnChange}
                    />
                </StyledHeader>
                <StyledBody>
                    <StyledTabs>
                        <StyledTab
                            active={acctiveTab === "Write"}
                            onClick={() => setActiveTab("Write")}
                        >
                            Write
                        </StyledTab>
                        <StyledTab
                            active={acctiveTab === "Preview"}
                            onClick={() => setActiveTab("Preview")}
                        >
                            Preview
                        </StyledTab>
                    </StyledTabs>
                    <textarea
                        name="contents"
                        onChange={handleOnChange}
                        placeholder="Leave a comment"
                        defaultValue={formData.contents}
                    ></textarea>
                    <StyledFooter>
                        <Button
                            backgroundColor="#94d3a2"
                            fontColor="#fff"
                            fontSize="12px"
                            active={formData.title !== ""}
                            onClick={() => formSubmit()}
                        >
                            Submit new issue
                        </Button>
                    </StyledFooter>
                </StyledBody>
            </StyledContentBox>
        </StyledAddContainer>
    )
}

export default IssueAdd
