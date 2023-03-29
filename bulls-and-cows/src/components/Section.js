import React, { useState } from "react";
import styled from "./Section.module.css";

const Section = ({ handler }) => {
    const [answer, setAnswer] = useState("");

    const handleChangeAnswer = (e) => {
        const value = e.target.value;

        if (isNaN(Number(value))) {
            alert("숫자만 입력 가능합니다.");
            return;
        }

        if (value.length > 4) {
            alert("4개의 숫자만 입력 가능합니다.");
            return;
        }
        setAnswer(value);
    };

    const handleSubmitAnswer = () => {
        if (answer.length !== 4) {
            alert("숫자 4개를 입력해주세요.");
            return;
        }
        handler(answer);
        setAnswer("");
    };

    return (
        <section className={styled.section}>
            <input type="text" value={answer} onChange={handleChangeAnswer} />
            <button type="button" onClick={handleSubmitAnswer}>
                맞춰보기
            </button>
        </section>
    );
};

export default Section;
