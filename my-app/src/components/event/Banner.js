import React, { useState } from "react";

const Banner = () => {
    const [visiable, setVisiable] = useState(true);

    const handlerOnClickBannerClose = (e) => {
        e.stopPropagation();
        setVisiable(false);
    };

    const handlerOnClickCouponAlert = (e) => {
        if (e.target.tagName == "BUTTON") {
            return;
        }

        alert("10% 할인 쿠폰에 당첨 되었습니다.");
    };

    return (
        <>
            {visiable && (
                <div
                    onClick={handlerOnClickCouponAlert}
                    style={{
                        backgroundColor: "orange",
                        fontWeight: "bold",
                        height: "50px",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}
                >
                    이 곳을 클릭해서 쿠폰을 받아가세요.
                    <button onClick={handlerOnClickBannerClose}>닫기</button>
                </div>
            )}
        </>
    );
};

export default Banner;
