import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getUser } from "../mocks/api";

export default function Home() {
    const navigate = useNavigate();
    const { data } = useQuery("@getUser", getUser, {
        staleTime: Infinity,
        suspense: true,
    });

    // if (isLoading) return <span>Loading...</span>;

    return (
        <div>
            <h1>Home {data.nickName}</h1>
            <button onClick={() => navigate("/edit")}>Go Edit Page</button>
        </div>
    );
}
