import Header from "./Header"
import Nav from "./Nav"
import ListContainer from "./ListContainer"
import Footer from "./Footer"
import axios from "axios"
import api from "./modules/api"

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
