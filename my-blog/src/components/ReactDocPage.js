import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReactDocPage = () => {
    const [doc, setDoc] = useState({});

    const params = useParams();
    const docId = params.docId;

    useEffect(() => {
        async function fetchDetailData() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${docId}`);
            const data = await res.json();
            return data;
        }

        fetchDetailData().then((data) => setDoc(data));
    }, []);

    return (
        <div>
            <h4>ReactDocPage ##{docId}</h4>
            <h3>{doc.title}</h3>
            <p>{doc.body}</p>
        </div>
    );
};

export default ReactDocPage;
