import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient, useQueries } from "react-query";
import { getUser, getPosts, updateNickname } from "../mocks/api";

export default function Edit() {
    const [inputValue, setInputValue] = useState("");

    const { data: user } = useQuery("@getUser", getUser, {
        staleTime: Infinity,
        suspense: true,
    });

    const { data: posts } = useQuery("@getPosts", getPosts, {
        staleTime: Infinity,
        suspense: true,
    });

    // const [user, posts] = useQueries([
    //     { queryKey: ["@getUser"], queryFn: getUser },
    //     { queryKey: ["@getPosts"], queryFn: getPosts },
    // ]);

    const queryClient = useQueryClient();
    const mutation = useMutation(updateNickname, {
        onSuccess: () => {
            queryClient.invalidateQueries("@getUser");
        },
    });

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate(inputValue);
    };

    // if (isLoading) return <span>Loading...</span>;

    return (
        <>
            <h1>Edit</h1>
            <h3>현재 닉네임: {user.nickName}</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    변경할 닉네임:
                    <input type="text" value={inputValue} onChange={handleChange} />
                </label>
            </form>
            <ul>
                {posts.map((item, index) => {
                    return <li key={index}>{item.title}</li>;
                })}
            </ul>
        </>
    );
}
