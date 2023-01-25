import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../util/useFetch.js";

const ReactDocPage = () => {
    const params = useParams();
    const docId = params.docId;

    const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${docId}`, "");

    return loading ? (
        <div>loading</div>
    ) : (
        <div>
            <h4>ReactDocPage ##{docId}</h4>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
        </div>
    );
};

export default ReactDocPage;
