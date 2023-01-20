import React from "react";
import { useParams } from "react-router-dom";

const ReactDocPage = () => {
    const params = useParams();

    return <div>ReactDocPage ##{params.docId}</div>;
};

export default ReactDocPage;
