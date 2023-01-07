import { useState } from "react";
// import Header from "./components/Header";
// import Welcome from "./components/Welcome";
// import Counter from "./components/Counter";

import Calculator from "./components/state/Calculator";

import "./App.css";

function App() {
    const [message, setMessage] = useState();

    return (
        <div className="App">
            {/* <input type="text" onKeyUp={(e) => setMessage(e.target.value)}></input>
            <Header message={message} />
            {message === "bbung" && "hello"}
            <Welcome firstName="bbung" lastName="95" withImg={true}></Welcome> */}
            {/* <Counter></Counter> */}
            <Calculator />
        </div>
    );
}

export default App;
