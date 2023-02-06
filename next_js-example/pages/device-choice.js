import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { fetchDeviceList } from "../src/modules/api";
import styled from "styled-components";
import RadioGroup from "../src/components/RadioGroup";
import BottomButton from "../src/components/BottomButton";

const ContentsBox = styled.div`
    text-align: center;
`;

const DevicesArea = styled.div`
    display: flex;
`;

export default function deviceChoice() {
    const [devices, setDevices] = useState([]);

    const formRef = useRef();
    const router = useRouter();
    const { user } = useSelector((state) => state);

    const handleSetDevice = (e) => {
        e.preventDefault();

        let formData = new FormData(formRef.current);
        const value = formData.get("device");
        startAccessoryChoice(value);
    };

    const startAccessoryChoice = (value) => {
        router.push({ pathname: "/accessory-choice", query: { device: value } });
    };

    useEffect(() => {
        (async function () {
            setDevices(await fetchDeviceList());
        })();
    }, []);

    return (
        <div className="container">
            <div className="wrapper">
                <h2>{user.name || "무명"}</h2>
                <form ref={formRef} onSubmit={handleSetDevice}>
                    <ContentsBox>
                        <DevicesArea>
                            {devices.map((item) => {
                                return <RadioGroup key={item.id} device={item} />;
                            })}
                        </DevicesArea>
                    </ContentsBox>
                </form>
            </div>
            <div className="bottomButtonBox">
                <BottomButton type={"submit"} text={"다음"} onClick={handleSetDevice}></BottomButton>
            </div>
        </div>
    );
}
