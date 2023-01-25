import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// const docs = [
//     {
//         id: 1,
//         title: "React 공부를 시작하면서",
//         date: "05/01/2021",
//     },
//     {
//         id: 2,
//         title: "CRA 없이 리엑트 프로젝트 시작하기",
//         date: "12/01/2021",
//     },
//     {
//         id: 3,
//         title: "이제는 사용해보자 useMemo & useCallback",
//         date: "31/01/2021",
//     },
//     {
//         id: 4,
//         title: "React 프로젝트에 Prettier 적용하기",
//         date: "15/02/2021",
//     },
// ];

const ReactPage = () => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            return data;
        }

        fetchData().then((data) => {
            setDocs(data);
        });
    }, []);

    return (
        <div>
            {docs.map((item) => (
                <Link key={item.id} to={`${item.id}`} style={{ display: "block", margin: "1rem 0" }}>
                    {item.title} | {item.date}
                </Link>
            ))}
        </div>
    );
};

export default ReactPage;
