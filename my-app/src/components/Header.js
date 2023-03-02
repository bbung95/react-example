import React from "react"
import logo from "../logo.svg"

function Header({ message }) {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {message}
                </a>
                {message === "bbung" && "hello"}
            </header>
        </div>
    )
}

export default Header
