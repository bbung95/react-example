import React from "react";
import "./Button.css";

function Button({ hadlerCardRaffle }) {
    return (
        <button className="btn" onClick={hadlerCardRaffle}>
            추첨
        </button>
    );
}

export default Button;
