import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { fetchAccessoryList } from "../src/modules/api";
import styled from "styled-components";
import RadioGroup from "../src/components/RadioGroup";
import BottomButton from "../src/components/BottomButton";

const AccessoryArea = styled.div`
    display: flex;
`;

export default function accessoryChoice() {
    const [accessorys, setAccesorys] = useState([]);

    const formRef = useRef();
    const router = useRouter();
    const { user } = useSelector((state) => state);

    const handleSetAccessory = (e) => {
        e.preventDefault();

        let formData = new FormData(formRef.current);
        const value = formData.get("accesory");
        startAccessoryChoice(value);
    };

    const startAccessoryChoice = (value) => {
        router.push({ pathname: "/complete", query: { ...router.query, acc: value } });
    };

    useEffect(() => {
        (async function () {
            setAccesorys(await fetchAccessoryList());
        })();
    }, []);

    if (accessorys.length === 0) return <div>Loadding...</div>;

    return (
        <div>
            <h2>{user.name || "무명"}</h2>
            <form ref={formRef} onSubmit={handleSetAccessory}>
                <AccessoryArea>
                    {accessorys.map((item) => {
                        return <RadioGroup key={item.id} device={item} />;
                    })}
                </AccessoryArea>
                <BottomButton type={"submit"} text={"결과보기"} callback={handleSetAccessory}></BottomButton>
            </form>
        </div>
    );
}
