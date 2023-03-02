import React from "react"
import styled from "styled-components"

const StyledLinkList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    list-style: none;
    white-space: nowrap;

    & li:last-child {
        margin-right: 0px;
    }
    & li {
        margin-right: 20px;
    }
`

const StyledLink = styled.a`
    color: #0969da;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

const linkList = [
    {
        title: "Terms",
        link: "https://docs.github.com/ko/site-policy/github-terms/github-terms-of-service",
    },
    {
        title: "Privacy",
        link: "https://docs.github.com/ko/site-policy/privacy-policies/github-privacy-statement",
    },
    { title: "Security", link: "https://github.com/security" },
    { title: "Status", link: "https://www.githubstatus.com/" },
    { title: "Docs", link: "https://docs.github.com/ko" },
    {
        title: "Contact GitHub",
        link: "https://support.github.com/?tags=dotcom-footer",
    },
    { title: "Pricing", link: "https://github.com/pricing" },
    { title: "API", link: "https://docs.github.com/ko" },
    { title: "Training", link: "https://github.com/services/" },
    { title: "Blog", link: "https://github.blog/" },
    { title: "About", link: "https://github.com/about" },
]

const FooterTabs = () => {
    return (
        <StyledLinkList>
            {linkList.map((item, index) => (
                <li key={index}>
                    <StyledLink href={item.link}>{item.title}</StyledLink>
                </li>
            ))}
        </StyledLinkList>
    )
}

export default FooterTabs
