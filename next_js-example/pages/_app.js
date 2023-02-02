import React from "react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { reducer } from "../src/stores/reducer";

const store = createStore(reducer);

const MyApp = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <Component {...pageProps}></Component>
        </Provider>
    );
};

export default MyApp;
