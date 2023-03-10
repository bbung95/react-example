import React, { useContext } from "react"
import styled from "styled-components"
import { useUser } from "./hooks/hooks"
// import UserContext from "./store/UserContext"

const StyledNav = styled.div`
    display: flex;
    font-size: 14px;
    align-items: center;
    padding: 16px 32px;
    background: #24292f;
`

const StyledNavInput = styled.input`
    margin-left: 20px;
    padding-left: 10px;
    height: 20px;
    width: 280px;
    border: none;
    border-radius: 5px;
    background-color: #000;
    transition: all 0.3s;
    outline: none;

    &::placeholder {
        color: lightgray;
    }

    &:focus {
        width: 400px;
        background-color: #fff;

        &::placeholder {
            color: #000;
        }
    }
`

const StyledNavTabs = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    margin-left: 20px;
    overflow: auto;

    & li {
        cursor: pointer;
        margin-right: 20px;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        white-space: nowrap;

        &:hover {
            color: rgba(255, 255, 255, 0.7);
        }
    }
`

const StyledUser = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
`

const Nav = () => {
    /**
     * Context-API
     * const user = useContext(UserContext)
     */

    const { data, isLoading } = useUser()
    let user = ""
    if (!isLoading) {
        user = data.data
    }

    return (
        <StyledNav>
            <img src="/logo192.png" width={30} />
            <StyledNavInput type="text" placeholder="Search or jump to...." />
            <StyledNavTabs>
                <li>Pull request</li>
                <li>Issues</li>
                <li>Codespaces</li>
                <li>Marketplace</li>
                <li>Explore</li>
            </StyledNavTabs>
            <StyledUser>
                {!isLoading && (
                    <>
                        <div style={{ color: "#fff", marginRight: "10px" }}>
                            {user.login}
                        </div>
                        <div>
                            <img
                                style={{ width: "25px", borderRadius: "50%" }}
                                src={user.avatar_url}
                            />
                        </div>
                    </>
                )}
            </StyledUser>
        </StyledNav>
    )
}

export default Nav
