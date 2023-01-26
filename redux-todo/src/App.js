import React from "react";
import Counter from "./components/Counter";
import StoreView from "./components/StoreView";
import User from "./components/User";

function App() {
    return (
        <div className="App">
            <StoreView></StoreView>
            <Counter></Counter>
            <User></User>
        </div>
    );
}

export default App;
