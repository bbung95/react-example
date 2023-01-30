import React from "react";
import { useDispatch } from "react-redux";
import Button from "./Button";

const Counter = () => {
    const dispatch = useDispatch();

    const handleOnClickDispatch = (action) => {
        dispatch({ type: action });
    };

    return (
        <div>
            <Button func={handleOnClickDispatch} action={"up"}>
                +
            </Button>
            <Button func={handleOnClickDispatch} action={"down"}>
                -
            </Button>
        </div>
    );
};

export default Counter;
