import React from "react";
import styled from "./ScoreList.module.css";

const ScoreList = ({ children }) => {
    return (
        <div>
            <div>기록</div>
            <ul className={styled.scoreList}>{children}</ul>
        </div>
    );
};

export default ScoreList;
