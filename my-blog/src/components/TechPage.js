import React from "react";
import { Link, Outlet } from "react-router-dom";

const TechPage = () => {
    return (
        <div>
            <h1>TechPage</h1>
            <Link to="/tech/javascript">Javascript</Link> | <Link to="/tech/react">React</Link>
            <Outlet />
        </div>
    );
};

export default TechPage;
