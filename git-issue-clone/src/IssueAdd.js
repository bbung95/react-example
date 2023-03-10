import React, { useContext, useRef, useState } from "react"
import styled from "styled-components"
import Button from "./components/Button"
import TextInput from "./components/TextInput"
import { useForm } from "./hooks/hooks"
import { fetchIssueAdd } from "./modules/api"
import { useNavigate } from "react-router-dom"
import UserContext from "./store/UserContext"

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
    max-width: calc(1230px);

    & > input {
        padding: 5px 10px;
        width: calc(100% - 20px);
        height: 26px;
        background: #f6f8fa;
        border: 1px solid lightgray;
        border-radius: 6px;
    }
`

const StyledBody = styled.div`
    padding: 10px;
    max-width: calc(1230px);

    & > textarea {
        padding: 10px;
        width: calc(100% - 20px);
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
        width: calc(100% + 20px);
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

const validate = (inputValues) => {
    let errors = {}
    if (inputValues.title === "") {
        errors = { title: "타이틀값을 넣어주세요." }
    }

    return errors
}

const IssueAdd = () => {
    const [acctiveTab, setActiveTab] = useState("Write")
    const navigate = useNavigate()
    // const user = useContext(UserContext)

    const inputRef = useRef()
    const { formData, handleOnChange, handleOnSubmit } = useForm({
        initialize: { title: "", body: "" },
        onSubmit: fetchIssueAdd,
        onSuccess: (res) => navigate("/issue", { replace: true }),
        refs: { title: inputRef },
        validate,
    })

    return (
        <StyledAddContainer>
            <StyledContentBox>
                <form>
                    <StyledHeader>
                        <TextInput
                            placeholder="Tilte"
                            name="title"
                            value={formData.title}
                            onChange={handleOnChange}
                            ref={inputRef}
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
                        <TextInput
                            type="textarea"
                            name="body"
                            placeholder="Leave a comment"
                            onChange={handleOnChange}
                        />
                        <StyledFooter>
                            <Button
                                backgroundColor="#94d3a2"
                                fontColor="#fff"
                                fontSize="12px"
                                active={formData.title !== ""}
                                onClick={handleOnSubmit}
                            >
                                Submit new issue
                            </Button>
                        </StyledFooter>
                    </StyledBody>
                </form>
            </StyledContentBox>
        </StyledAddContainer>
    )
}

export default IssueAdd
