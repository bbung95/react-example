import React from "react"
import styled from "styled-components"
import FooterTabs from "./components/FooterTabs"

const StyledFooter = styled.div`
    margin-top: 40px;
    padding: 40px 16px 8px;
    border-top: 1px solid #d0d7de;
`

const Footer = () => {
    return (
        <StyledFooter>
            <FooterTabs />
        </StyledFooter>
    )
}

export default Footer
