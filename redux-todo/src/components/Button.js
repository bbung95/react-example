import React from "react";
import styled from "./button.module.css";

const Button = (props) => {
    const { action, func } = props;

    return (
        <button className={styled.btn} onClick={() => func(action)}>
            {props.children}
        </button>
    );
};

export default Button;
