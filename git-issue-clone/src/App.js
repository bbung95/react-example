import Header from "./Header"
import Nav from "./Nav"
import Issue from "./Issue"
import Footer from "./Footer"
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import { useEffect } from "react"

const App = () => {
    const location = useLocation()
    const navigation = useNavigate()

    useEffect(() => {
        if (location.pathname == "/") {
            navigation("code")
        }
    })

    return (
        <>
            <Nav />
            <Header />
            <Routes>
                <Route path="code" element={<div>code</div>} />
                <Route path="issue" element={<Issue />} />
                <Route path="pull" element={<>pull requests</>} />
                <Route path="action" element={<>actions</>} />
                <Route path="project" element={<>projects</>} />
                <Route path="security" element={<>security</>} />
                <Route path="insight" element={<>insights</>} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
