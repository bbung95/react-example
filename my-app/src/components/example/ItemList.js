import React from "react";
import Item from "./Item";

const ItemList = (props) => {
    const { title, items, stocked } = props;

    let filterData = items.filter((item) => item.stocked === stocked);
    filterData = stocked ? filterData : items;

    return (
        <div>
            <strong>{title}</strong>
            {filterData.map((item, index) => (
                <Item key={index} info={item} />
            ))}
        </div>
    );
};

export default ItemList;
