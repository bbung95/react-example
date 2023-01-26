import React, { useContext } from "react";
import { UserContext } from "../store/user";

const BlogPage = () => {
    const dispatch = useContext(UserContext);

    console.log(dispatch);

    return (
        <div>
            <h1>BlogPage</h1>
            <button onClick={() => dispatch({ type: "changeJob", text: "developer" })}>Change Job</button>
        </div>
    );
};

export default BlogPage;
