import React, { useState } from "react"
import styled from "styled-components"
import Tab from "./Tab"

const StyledTabList = styled.ul`
    display: flex;
    justify-content: flex-start;
    margin: 0;
    overflow: auto;
`

const StyledCircleBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    width: 15px;
    height: 15px;
    font-size: 10px;
    background: lightgray;
    border-radius: 50%;
`

const tabList = [
    { title: "Code", src: "icon/code.svg" },
    { title: "Issue", src: "icon/circle.svg", number: 1 },
    { title: "Pull requests", src: "icon/bezier2.svg" },
    { title: "Actions", src: "icon/play.svg" },
    { title: "Projects", src: "icon/columns.svg" },
    { title: "Security", src: "icon/shield-exclamation.svg" },
    { title: "Insights", src: "icon/graph-up.svg" },
]

const Tabs = () => {
    const [selectedTab, setSelectdTab] = useState(0)

    const onClickTab = (idx) => {
        setSelectdTab(idx)
    }

    return (
        <StyledTabList>
            {tabList.map((item, index) => (
                <Tab
                    key={index}
                    src={item.src}
                    selected={index === selectedTab && true}
                    onClickHandler={() => onClickTab(index)}
                >
                    {item.title}
                    {item.number && (
                        <StyledCircleBox>{item.number}</StyledCircleBox>
                    )}
                </Tab>
            ))}
        </StyledTabList>
    )
}

export default Tabs
