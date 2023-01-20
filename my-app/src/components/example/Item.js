import React from "react";
import styled from "styled-components";

const Item = (props) => {
    const { name, price, stocked } = props.info;

    return (
        <div>
            <ProductName stocked={stocked}>{name}</ProductName> {price}
        </div>
    );
};

const ProductName = styled.span`
    color: ${(props) => (props.stocked ? props.stocked : "red")};
`;

export default Item;
