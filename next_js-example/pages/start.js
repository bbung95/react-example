import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../src/modules/api";
import { action } from "../src/stores/store";
import BottomButton from "../src/components/BottomButton";
import { useRouter } from "next/router";

// 렌더링 => 불러오기 => 완료 => 렌더링
export default function start() {
    const { user } = useSelector((state) => state);
    const dispatch = useDispatch();

    const router = useRouter();

    const startDeviceChoice = () => {
        console.log(12);
        router.push("/device-choice");
    };

    useEffect(() => {
        (async function () {
            const data = await fetchUser();
            dispatch(action.setName(data.name));
        })();
    }, []);

    if (!user.name) {
        return (
            <div className="container">
                <div className="wrapper">
                    <h2>Loading.....</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="wrapper">
                <h2>
                    {user.name}님, 입사를 축하드립니다!
                    <br />
                    원하시는 개발 장비를 선택해주세요.
                </h2>
            </div>
            <div className="bottomButtonBox">
                <BottomButton text={"시작"} onClick={startDeviceChoice}></BottomButton>
            </div>
        </div>
    );
}
