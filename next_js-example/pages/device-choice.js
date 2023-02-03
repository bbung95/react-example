import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { fetchDeviceList } from "../src/modules/api";
import styled from "styled-components";
import RadioGroup from "../src/components/RadioGroup";
import BottomButton from "../src/components/BottomButton";

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

    if (devices.length === 0) return <div>Loadding...</div>;

    return (
        <div>
            <h2>{user.name || "무명"}</h2>
            <form ref={formRef} onSubmit={handleSetDevice}>
                <DevicesArea>
                    {devices.map((item) => {
                        return <RadioGroup key={item.id} device={item} />;
                    })}
                </DevicesArea>
                <BottomButton type={"submit"} text={"다음"} callback={handleSetDevice}></BottomButton>
            </form>
        </div>
    );
}
