import React, { useRef } from "react";
import Cat from "./Cat";

export default function CatParent() {
    console.log("부모 컴포넌트 CatParent");

    const catRef = useRef();

    console.log(catRef);

    return (
        <div>
            <h4> 고양이가 세상을 구한다 ️</h4>
            <div>
                <Cat ref={catRef} />
                <button onClick={() => console.log(catRef.current.height)}>고양이의 크기를 알고싶어</button>
            </div>
        </div>
    );
}
