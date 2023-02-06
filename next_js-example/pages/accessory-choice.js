import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { fetchAccessoryList } from "../src/modules/api";
import styled from "styled-components";
import RadioGroup from "../src/components/RadioGroup";
import BottomButton from "../src/components/BottomButton";

const ContentsBox = styled.div`
    text-align: center;
`;

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

    return (
        <div className="container">
            <div className="wrapper">
                <h2>{user.name || "무명"}</h2>
                <form ref={formRef} onSubmit={handleSetAccessory}>
                    <ContentsBox>
                        <AccessoryArea>
                            {accessorys.map((item) => {
                                return <RadioGroup key={item.id} device={item} />;
                            })}
                        </AccessoryArea>
                    </ContentsBox>
                </form>
            </div>
            <div className="bottomButtonBox">
                <BottomButton type={"submit"} text={"결과보기"} onClick={handleSetAccessory}></BottomButton>
            </div>
        </div>
    );
}
