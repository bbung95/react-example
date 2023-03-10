import Header from "./Header"
import Nav from "./Nav"
import Issue from "./Issue"
import IssueAdd from "./IssueAdd"
import Footer from "./Footer"
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchUserInfo } from "./modules/api"
import UserContext from "./store/UserContext"

const App = () => {
    const location = useLocation()
    const navigation = useNavigate()
    const [user, setUser] = useState()

    useEffect(() => {
        if (location.pathname == "/") {
            navigation("code")
        }

        ;(async function () {
            const { data } = await fetchUserInfo()
            setUser(data)
        })()
    }, [])

    return (
        <>
            <UserContext.Provider value={user}>
                <Nav />
                <Header />
                <Routes>
                    <Route path="/code" element={<div>code</div>} />
                    <Route path="/issue" element={<Issue />} />
                    <Route path="/issue/new" element={<IssueAdd />} />
                    <Route path="/pull" element={<>pull requests</>} />
                    <Route path="/action" element={<>actions</>} />
                    <Route path="/project" element={<>projects</>} />
                    <Route path="/security" element={<>security</>} />
                    <Route path="/insight" element={<>insights</>} />
                </Routes>
                <Footer />
            </UserContext.Provider>
        </>
    )
}

export default App
