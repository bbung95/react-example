import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <h1>MainPage</h1>
            <Link to="/">main</Link> | <Link to="/tech">tech</Link> | <Link to="/blog">blog</Link>
        </div>
    );
};

export default MainPage;
