import React from "react";
import img from "../img/cat.jpg";

function Welcome(props) {
    return (
        <>
            {props.withImg && <img src={img} alt="placeholder" height="200px" />}
            <div>Hello!</div>
            <div>
                <span>{props.firstName}</span>
                {props.lastName}
            </div>
        </>
    );
}

export default Welcome;
