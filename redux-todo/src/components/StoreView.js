import React from "react";
import { useSelector } from "react-redux";

const StoreView = () => {
    const { counter, user } = useSelector((state) => state);

    return (
        <div>
            <div
                style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                }}
            >
                <div>name : {user.name}</div>
                <div>job : {user.job}</div>
            </div>
            <h2>{counter}</h2>
        </div>
    );
};

export default StoreView;
