import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
    const dispatch = useDispatch();

    const btnStyle = {
        width: "100px",
        height: "60px",
        fontSize: "40px",
    };

    return (
        <div>
            <button
                style={btnStyle}
                onClick={() => {
                    dispatch({ type: "up" });
                }}
            >
                +
            </button>
            <button
                style={btnStyle}
                onClick={() => {
                    dispatch({ type: "down" });
                }}
            >
                -
            </button>
        </div>
    );
};

export default Counter;
