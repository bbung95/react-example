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
        router.push("/device-choice");
    };

    useEffect(() => {
        (async function () {
            const data = await fetchUser();
            dispatch(action.setName(data.name));
        })();
    }, []);

    if (!user.name) return <div>Loading.....</div>;

    return (
        <div>
            <h2>{user.name}님, 입사를 축하드립니다! 원하시는 개발 장비를 선택해주세요.</h2>
            <BottomButton text={"시작"} callback={startDeviceChoice}></BottomButton>
        </div>
    );
}
