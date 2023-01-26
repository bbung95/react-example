import React, { createContext, useReducer, useState } from "react";

export const UserContext = createContext();

const initialUser = {
    name: "bbung",
    job: "student",
    age: 28,
};
const userReducer = (state, action) => {
    switch (action.type) {
        case "changeJob":
            return { ...state, job: action.text };
        default:
            break;
    }
};

const UserStore = (props) => {
    // const [job, setJob] = useState("student");
    const [user, dispatch] = useReducer(userReducer, initialUser);

    console.log(user);
    // const user = {
    //     name: "bbung",
    //     job: job,
    //     age: 28,
    //     changeJob: (updateJob) => {
    //         setJob(updateJob);
    //     },
    // };
    return <UserContext.Provider value={dispatch}>{props.children}</UserContext.Provider>;
};

export default UserStore;
