import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import { counterReducer } from "./store/store";

const container = document.getElementById("root");
const root = createRoot(container);

const store = createStore(counterReducer);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
