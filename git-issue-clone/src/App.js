import style from "./App.css"
import Header from "./components/Header"
import Nav from "./components/Nav"
import ListContainer from "./components/ListContainer"
import Footer from "./components/Footer"

const App = () => {
    return (
        <>
            <Nav />
            <Header />
            <ListContainer />
            <Footer />
        </>
    )
}

export default App
