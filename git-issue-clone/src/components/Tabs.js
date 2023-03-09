import React, { useEffect, useState } from "react"
import { useLocation, Link } from "react-router-dom"
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
    { title: "Code", src: "/icon/code.svg", path: "code" },
    { title: "Issue", src: "/icon/circle.svg", number: 1, path: "issue" },
    { title: "Pull requests", src: "/icon/bezier2.svg", path: "pull" },
    { title: "Actions", src: "/icon/play.svg", path: "action" },
    { title: "Projects", src: "/icon/columns.svg", path: "project" },
    {
        title: "Security",
        src: "/icon/shield-exclamation.svg",
        path: "security",
    },
    { title: "Insights", src: "/icon/graph-up.svg", path: "insight" },
]

const Tabs = () => {
    const [selectedTab, setSelectdTab] = useState("")

    const location = useLocation()

    const onClickTab = (idx) => {
        setSelectdTab(idx)
    }

    useEffect(() => {
        setSelectdTab(location.pathname.replace("/", ""))
    })

    return (
        <StyledTabList>
            {tabList.map((item, index) => (
                <Link to={item.path} key={index}>
                    <Tab
                        src={item.src}
                        selected={item.path === selectedTab && true}
                        onClickHandler={() => onClickTab(index)}
                    >
                        {item.title}
                        {item.number && (
                            <StyledCircleBox>{item.number}</StyledCircleBox>
                        )}
                    </Tab>
                </Link>
            ))}
        </StyledTabList>
    )
}

export default Tabs
