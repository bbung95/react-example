import React from "react";

const Item = (props) => {
    const { name, price, stocked } = props.info;

    const style = {
        color: stocked || "red",
    };

    return (
        <div>
            <span style={style}>{name}</span> {price}
        </div>
    );
};

export default Item;
