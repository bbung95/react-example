import React, { useRef } from "react";
import styled from "styled-components";
import Radio from "./Radio";

const ImgArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 400px;
`;

const ImgButton = styled.div`
    height: 300px;
    width: 300px;
    text-align: center;
    font-size: 30px;
    border-radius: 10px;
    border: 1px solid gray;
    background-color: #fff;

    &:hover {
        border: 1px solid blue;
    }
`;

const RadioGroup = (props) => {
    const { id, name, title } = props.device;

    const ref = useRef();

    const onClickButton = (e) => {
        ref.current.checked = true;
    };

    return (
        <ImgArea>
            <ImgButton onClick={onClickButton}>{title}</ImgButton>
            <Radio ref={ref} id={id} name={name} title={title} />
        </ImgArea>
    );
};

export default RadioGroup;
