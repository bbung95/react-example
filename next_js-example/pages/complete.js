import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BottomButton from "../src/components/BottomButton";

export default function complete() {
    const { user } = useSelector((state) => state);
    const router = useRouter();
    const result = router.query;

    const retryChoice = () => {
        router.push("/start");
    };

    return (
        <div className="container">
            <div className="wrapper">
                <h2>
                    {user.name || "무명"}님이 선택하신 장비는 {result.device}, 악세서리는 {result.acc}입니다.
                    <br />
                    맞으시다면 제출하기 버튼, 다시 선택 하시려면 첫 화면으로 돌아가기 버튼을 클릭해주세요.
                </h2>
            </div>
            <div className="bottomButtonBox">
                <BottomButton type="button" text="제출" />
                <BottomButton type="button" text="다시하기" onClick={retryChoice} />
            </div>
        </div>
    );
}
