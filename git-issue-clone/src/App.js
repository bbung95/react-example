import Header from "./Header"
import Nav from "./Nav"
import Issue from "./Issue"
import IssueAdd from "./IssueAdd"
import Footer from "./Footer"
import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchUserInfo } from "./modules/api"
// import UserContext from "./store/UserContext"
import { QueryClient, QueryClientProvider } from "react-query"
const App = () => {
    // const [user, setUser] = useState()

    const queryClient = new QueryClient()

    // useEffect(() => {
    //     ;(async function () {
    //         const { data } = await fetchUserInfo()
    //         setUser(data)
    //     })()
    // }, [])

    return (
        <>
            {/* <UserContext.Provider value={user}> */}
            <QueryClientProvider client={queryClient}>
                <Nav />
                <Header />
                <Routes>
                    <Route path="/code" element={<div>code</div>} />
                    <Route path="/" element={<Issue />} />
                    <Route path="/issue" element={<Issue />} />
                    <Route path="/issue/new" element={<IssueAdd />} />
                    <Route path="/pull" element={<div>pull requests</div>} />
                    <Route path="/action" element={<div>actions</div>} />
                    <Route path="/project" element={<div>projects</div>} />
                    <Route path="/security" element={<div>security</div>} />
                    <Route path="/insight" element={<div>insights</div>} />
                </Routes>
                <Footer />
            </QueryClientProvider>
            {/* </UserContext.Provider> */}
        </>
    )
}

export default App
